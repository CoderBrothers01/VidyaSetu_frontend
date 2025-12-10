import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import globalStyle from '../../../../utils/globalStyle';
import Fonts from '../../../../utils/Fonts';
import CustomDropdown from '../../../../components/CustomDropdown';
import CustomHeader from '../../../../components/CustomHeader';
import Stars from '../../../../components/CustomStars';
import Images from '../../../../assets';

const sampleData = [
  {
    id: 'hw1',
    title: 'Algebra Practice - Chapter 5',
    subject: 'Mathematics',
    assigned: '2025-11-28',
    due: '2025-12-04',
    status: 'pending',
    attachments: ['worksheet.pdf'],
  },
  {
    id: 'hw2',
    title: 'Essay: Importance of Water Conservation',
    subject: 'English',
    assigned: '2025-12-01',
    due: '2025-12-06',
    status: 'pending',
    attachments: [],
  },
  {
    id: 'hw3',
    title: 'Physics Lab Report - Motion',
    subject: 'Physics',
    assigned: '2025-11-30',
    due: '2025-12-03',
    status: 'submitted',
    attachments: ['report.docx'],
  },
  {
    id: 'hw4',
    title: 'History Q&A - Ancient Civilizations',
    subject: 'History',
    assigned: '2025-12-02',
    due: '2025-12-07',
    status: 'pending',
    attachments: [],
  },
];

const uniqSubjects = [
  'All',
  ...Array.from(new Set(sampleData.map(s => s.subject))),
];

const formatDate = iso => {
  const d = new Date(iso);
  return d.toLocaleDateString();
};

const daysRemaining = iso => {
  const now = new Date();
  const d = new Date(iso);
  const diff = Math.ceil((d - now) / (1000 * 60 * 60 * 24));
  if (diff < 0) return `${Math.abs(diff)}d overdue`;
  if (diff === 0) return 'Due today';
  return `${diff}d left`;
};

const StudentHomework = ({ navigation }) => {
  const [subject, setSubject] = useState('All');
  const [query, setQuery] = useState('');
  const [data, setData] = useState(sampleData);

  const filtered = useMemo(() => {
    return data.filter(h => {
      if (subject !== 'All' && h.subject !== subject) return false;
      if (
        query.trim() &&
        !`${h.title} ${h.subject}`.toLowerCase().includes(query.toLowerCase())
      )
        return false;
      return true;
    });
  }, [data, subject, query]);

  const toggleSubmit = itemId => {
    setData(prev =>
      prev.map(p =>
        p.id === itemId
          ? { ...p, status: p.status === 'submitted' ? 'pending' : 'submitted' }
          : p,
      ),
    );
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'flex-start',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
      }}
    >
      <View style={{ width: 56, alignItems: 'center' }}>
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 8,
            backgroundColor: Colors.CardBackground,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            source={Images.cap}
            style={{ width: 28, height: 28, tintColor: '#fff' }}
          />
        </View>
      </View>

      <View style={{ flex: 1, paddingLeft: 10 }}>
        <Text style={{ ...Fonts.Bold.medium, color: '#000' }}>
          {item.title}
        </Text>
        <Text
          style={{
            ...Fonts.Regular.small,
            color: Colors.TextSecondary,
            marginTop: 6,
          }}
        >
          {item.subject} • Assigned {formatDate(item.assigned)}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
          }}
        >
          <Text style={{ ...Fonts.Regular.small, color: '#444' }}>
            Due: {formatDate(item.due)}
          </Text>
          <Text
            style={{
              ...Fonts.Regular.small,
              color:
                item.status === 'submitted' ? Colors.CardBackground : '#E5563D',
            }}
          >
            {item.status === 'submitted'
              ? 'Submitted'
              : daysRemaining(item.due)}
          </Text>
        </View>

        <View
          style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}
        >
          <TouchableOpacity
            onPress={() => toggleSubmit(item.id)}
            style={{
              backgroundColor:
                item.status === 'submitted' ? '#eee' : Colors.CardBackground,
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
              marginRight: 8,
            }}
          >
            <Text
              style={{
                color: item.status === 'submitted' ? '#444' : '#fff',
                ...Fonts.Bold.small,
              }}
            >
              {item.status === 'submitted' ? 'Mark Pending' : 'Mark Submitted'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (item.attachments.length === 0)
                return Alert.alert('No attachments');
              // implement open attachment
              Alert.alert('Open', item.attachments.join(', '));
            }}
            style={{ paddingVertical: 6, paddingHorizontal: 8 }}
          >
            <Text
              style={{ ...Fonts.Regular.small, color: Colors.TextSecondary }}
            >
              {item.attachments.length
                ? `${item.attachments.length} attachment(s)`
                : 'No attachments'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />
      <CustomHeader title="Homework" onBackPress={() => navigation.goBack()} />

      <View
        style={[globalStyle.whitecontainer, { height: '86%', paddingTop: 18 }]}
      >
        <Text style={{ ...Fonts.Bold.large, color: '#000', marginBottom: 12 }}>
          My Homework
        </Text>

        <View style={{ marginBottom: 12 }}>
          <CustomDropdown
            label="Subject"
            options={uniqSubjects.map(s => ({ label: s, value: s }))}
            value={subject}
            onSelect={val => setSubject(val)}
            placeholder="All Subjects"
            searchable={false}
            containerStyle={{ marginBottom: 8 }}
          />

          <TextInput
            placeholder="Search homework"
            value={query}
            onChangeText={setQuery}
            style={{
              borderWidth: 1,
              borderColor: '#eee',
              borderRadius: 8,
              paddingVertical: 10,
              paddingHorizontal: 12,
              backgroundColor: '#fff',
            }}
          />
        </View>

        <FlatList
          data={filtered}
          keyExtractor={i => i.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={{ alignItems: 'center', marginTop: 40 }}>
              <Text
                style={{ ...Fonts.Regular.medium, color: Colors.TextSecondary }}
              >
                No homework found
              </Text>
            </View>
          }
        />
      </View>
    </LinearGradient>
  );
};

export default StudentHomework;
