import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../../../utils/Fonts';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import Stars from '../../../../components/CustomStars';
import CustomHeader from '../../../../components/CustomHeader';
import globalStyle from '../../../../utils/globalStyle';
import CustomButton from '../../../../components/CustomButton';
import styles from './style';

const StaffManagement = () => {
  const navigation = useNavigation();

  const staffCounts = { total: 45, teachers: 30, others: 15 };

  /* -------- ALL TEACHERS DATA -------- */
  const teachers = [
    {
      id: '1',
      name: 'Mrs. Sharma',
      subjects: ['Maths'],
      isClassTeacher: true,
      className: '1A',
    },
    {
      id: '2',
      name: 'Mr. Singh',
      subjects: ['English', 'Grammar'],
      isClassTeacher: true,
      className: '2B',
    },
    {
      id: '3',
      name: 'Ms. Rao',
      subjects: ['Science'],
      isClassTeacher: false,
    },
    {
      id: '4',
      name: 'Mrs. Patel',
      subjects: ['Hindi'],
      isClassTeacher: true,
      className: '4A',
    },
    {
      id: '5',
      name: 'Mr. Kumar',
      subjects: ['Computer'],
      isClassTeacher: false,
    },
  ];

  /* -------- TEACHER ROW -------- */
  const renderTeacher = ({ item }) => (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
        elevation: 2,
      }}
    >
      {/* Name + Badge */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ ...Fonts.Bold.medium }}>{item.name}</Text>

        {item.isClassTeacher && (
          <View
            style={{
              backgroundColor: Colors.ButtonPrimary,
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: '#fff', fontSize: 12 }}>
              Class Teacher ({item.className})
            </Text>
          </View>
        )}
      </View>

      {/* Subjects */}
      <Text
        style={{
          ...Fonts.Regular.small,
          color: '#666',
          marginTop: 6,
        }}
      >
        Subjects: {item.subjects.join(', ')}
      </Text>
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
      <CustomHeader
        title="Staff Management"
        onBackPress={() => navigation.goBack()}
      />

      <Text style={[globalStyle.font14Italic, { textAlign: 'center' }]}>
        Manage teachers, staff, and salary tracking
      </Text>

      <View
        style={[
          globalStyle.mt20,
          { width: '60%', alignItems: 'center', alignSelf: 'center' },
        ]}
      >
        <CustomButton
          title="+ New Join"
          style={{ borderRadius: 12 }}
          onPress={() => navigation.navigate('AddStaff')}
        />
      </View>

      {/* -------- STAFF COUNTS -------- */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingHorizontal: 8,
          marginTop: 10,
        }}
      >
        <View style={[styles.statBox, styles.totalBox]}>
          <Text style={globalStyle.font14B}>Total Staff</Text>
          <Text style={globalStyle.font18ItalicB}>{staffCounts.total}</Text>
        </View>

        <View style={[styles.statBox, styles.presentBox]}>
          <Text style={globalStyle.font14B}>Teachers</Text>
          <Text style={globalStyle.font18ItalicB}>
            {staffCounts.teachers}
          </Text>
        </View>

        <View style={[styles.statBox, styles.absentBox]}>
          <Text style={globalStyle.font14B}>Other Staff</Text>
          <Text style={globalStyle.font18ItalicB}>{staffCounts.others}</Text>
        </View>
      </View>

      {/* -------- ALL TEACHERS LIST -------- */}
      <View style={[globalStyle.whitecontainer, { height: '70%' }]}>
        <Text style={[globalStyle.font16ItalicB, { marginBottom: 12 }]}>
          Teachers
        </Text>

        <FlatList
          data={teachers}
          keyExtractor={item => item.id}
          renderItem={renderTeacher}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal:8, paddingVertical:8}}
        />
      </View>
    </LinearGradient>
  );
};

export default StaffManagement;
