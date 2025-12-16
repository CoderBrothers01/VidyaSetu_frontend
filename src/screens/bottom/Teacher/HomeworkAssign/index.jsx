import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import Stars from '../../../../components/CustomStars';
import CustomDropdown from '../../../../components/CustomDropdown';
import CustomHeader from '../../../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../../../utils/Fonts';
import globalStyle from '../../../../utils/globalStyle';
import CustomTextInput from '../../../../components/CustomTextInput';

const classOptions = [
  { label: 'Class 1', value: '1' },
  { label: 'Class 2', value: '2' },
  { label: 'Class 3', value: '3' },
  { label: 'Class 4', value: '4' },
  { label: 'Class 5', value: '5' },
  { label: 'Class 6', value: '6' },
];

const subjectOptions = [
  { label: 'Maths', value: 'maths' },
  { label: 'English', value: 'english' },
  { label: 'Science', value: 'science' },
  { label: 'Hindi', value: 'hindi' },
];

const HomeworkAssign = () => {
  const navigation = useNavigation();

  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const assignHomework = () => {
    const payload = {
      class: selectedClass,
      subject: selectedSubject,
      title,
      description,
      dueDate,
    };

    console.log('Homework Assigned:', payload);
    // API call here
  };

  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />
      <CustomHeader
        title="Assign Homework"
        onBackPress={() => navigation.goBack()}
      />
      <View style={globalStyle.whitecontainer2}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 200, gap: 10, paddingHorizontal:12 }}
          showsVerticalScrollIndicator={false}
        >
          <CustomDropdown
            label="Select Class"
            options={classOptions}
            value={selectedClass}
            onSelect={setSelectedClass}
            placeholder="Choose Class"
          />

          <CustomDropdown
            label="Select Subject"
            options={subjectOptions}
            value={selectedSubject}
            onSelect={setSelectedSubject}
            placeholder="Choose Subject"
          />

          <CustomTextInput
            label="Homework Title"
            value={title}
            onChangeText={setTitle}
            placeholder="Enter homework title"
          />

          <CustomTextInput
            label="Homework Description"
            value={description}
            onChangeText={setDescription}
            placeholder="Enter homework details"
            multiline
            numberOfLines={4}
          />

          <Text style={[Fonts.Regular.medium, { marginTop: 14 }]}>
            Due Date
          </Text>
          <TextInput
            value={dueDate}
            onChangeText={setDueDate}
            placeholder="DD / MM / YYYY"
            style={{
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 10,
              padding: 12,
              marginTop: 6,
            }}
          />

          <TouchableOpacity
            onPress={assignHomework}
            style={{
              backgroundColor: Colors.primary,
              paddingVertical: 14,
              borderRadius: 14,
              marginTop: 25,
              marginBottom: 30,
            }}
          >
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '600',
              }}
            >
              Assign Homework
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default HomeworkAssign;
