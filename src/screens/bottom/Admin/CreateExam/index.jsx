/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import Stars from '../../../../components/CustomStars';
import CustomHeader from '../../../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../../../../utils/globalStyle';
import Fonts from '../../../../utils/Fonts';
import CustomTextInput from '../../../../components/CustomTextInput';
import CustomDropdown from '../../../../components/CustomDropdown';

const classOptions = [
  { label: 'Play Group', value: 'play_group' },
  { label: 'Nursery', value: 'nursery' },
  { label: 'LKG', value: 'lkg' },
  { label: 'UKG', value: 'ukg' },
  { label: 'Class 1', value: '1' },
  { label: 'Class 2', value: '2' },
  { label: 'Class 3', value: '3' },
  { label: 'Class 4', value: '4' },
  { label: 'Class 5', value: '5' },
  { label: 'Class 6', value: '6' },
  { label: 'Class 7', value: '7' },
  { label: 'Class 8', value: '8' },
  { label: 'Class 9', value: '9' },
  { label: 'Class 10', value: '10' },
  { label: 'Class 11', value: '11' },
  { label: 'Class 12', value: '12' },
];
const subjectOptions = [
  { label: 'Maths', value: 'maths' },
  { label: 'English', value: 'english' },
  { label: 'Science', value: 'science' },
  { label: 'Hindi', value: 'hindi' },
  { label: 'Social Science', value: 'social_science' },
  { label: 'Computer', value: 'computer' },
];

const examOptions = [
  { label: '1st Term', value: '1st_term' },
  { label: '2nd Term', value: '2nd_term' },
  { label: '3rd Term', value: '3rd_term' },
  { label: 'Half Yearly', value: 'half_yearly' },
  { label: 'Yearly', value: 'yearly' },
];

const CreateExam = () => {
  const navigation = useNavigation();

  const [examName, setExamName] = useState(null);

  const [selectedClass, setSelectedClass] = useState(null);
  const [subject, setSubject] = useState(null);
  const [duration, setDuration] = useState('');
  const [questions, setQuestions] = useState([]);

  /* ---------- ADD QUESTION ---------- */
  const addQuestion = type => {
    setQuestions(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        type,
        question: '',
        options: type === 'mcq' ? ['', '', '', ''] : [],
        answer: '',
        marks: '',
      },
    ]);
  };

  /* ---------- UPDATE QUESTION ---------- */
  const updateQuestion = (id, key, value) => {
    setQuestions(prev =>
      prev.map(q => (q.id === id ? { ...q, [key]: value } : q)),
    );
  };

  const totalMarks = questions.reduce(
    (sum, q) => sum + Number(q.marks || 0),
    0,
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
        title="Create Exam"
        onBackPress={() => navigation.goBack()}
      />
      <View style={globalStyle.whitecontainer2}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 300, gap:10 }}
          showsVerticalScrollIndicator={false}
        >
          {/* ---------- BASIC INFO ---------- */}
          <Text style={[Fonts.Bold.large, { marginBottom: 10 }]}>
            Exam Details
          </Text>
          <CustomDropdown
            label="Exam Name"
            options={examOptions}
            value={examName}
            onSelect={val => setExamName(val)}
            placeholder="Select Exam Type"
            searchable={false}
          />

          <CustomTextInput
            label="Duration (in minutes)"
            placeholder="Duration (in minutes)"
            keyboardType="numeric"
            value={duration}
            onChangeText={setDuration}
          />

          {/* ---------- CLASS & SUBJECT (ONE ROW) ---------- */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 12,
            }}
          >
            <View style={{ width: '48%' }}>
              <CustomDropdown
                label="Select Class"
                options={classOptions}
                value={selectedClass}
                onSelect={val => setSelectedClass(val)}
                placeholder="Choose Class"
                searchable
              />
            </View>

            <View style={{ width: '48%' }}>
              <CustomDropdown
                label="Subject"
                options={subjectOptions}
                value={subject}
                onSelect={val => setSubject(val)}
                placeholder="Choose Subject"
                searchable
              />
            </View>
          </View>

          {/* ---------- QUESTIONS ---------- */}
          <Text style={[Fonts.Bold.large, { marginTop: 20 }]}>Questions</Text>

          {questions.map((q, index) => (
            <View
              key={q.id}
              style={{
                backgroundColor: '#f9f9f9',
                padding: 12,
                borderRadius: 12,
                marginTop: 12,
                gap: 5,
              }}
            >
              <Text style={Fonts.Bold.medium}>
                Q{index + 1} ({q.type.toUpperCase()})
              </Text>

              <CustomTextInput
                placeholder="Enter question"
                value={q.question}
                onChangeText={t => updateQuestion(q.id, 'question', t)}
              />

              {q.type === 'mcq' && (
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                  }}
                >
                  {q.options.map((opt, i) => (
                    <View key={i} style={{ width: '48%' }}>
                      <CustomTextInput
                        placeholder={`Option ${i + 1}`}
                        value={opt}
                        onChangeText={t => {
                          const opts = [...q.options];
                          opts[i] = t;
                          updateQuestion(q.id, 'options', opts);
                        }}
                      />
                    </View>
                  ))}
                </View>
              )}

              <CustomTextInput
                placeholder="Marks"
                keyboardType="numeric"
                value={q.marks}
                onChangeText={t => updateQuestion(q.id, 'marks', t)}
              />
            </View>
          ))}

          {/* ---------- ADD QUESTION BUTTONS ---------- */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 16,
            }}
          >
            <TouchableOpacity
              onPress={() => addQuestion('mcq')}
              style={{
                flex: 1,
                marginRight: 8,
                backgroundColor: Colors.ButtonSecondary,
                padding: 12,
                borderRadius: 14,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff' }}>+ MCQ</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => addQuestion('descriptive')}
              style={{
                flex: 1,
                marginLeft: 8,
                backgroundColor: Colors.ButtonPrimary,
                padding: 12,
                borderRadius: 14,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff' }}>+ Descriptive</Text>
            </TouchableOpacity>
          </View>

          {/* ---------- SUMMARY ---------- */}
          <Text
            style={[Fonts.Bold.medium, { marginTop: 20, textAlign: 'center' }]}
          >
            Total Marks: {totalMarks}
          </Text>

          {/* ---------- SAVE ---------- */}
          <TouchableOpacity
            style={{
              backgroundColor: Colors.ButtonPrimary,
              padding: 14,
              borderRadius: 16,
              marginTop: 20,
              alignItems: 'center',
            }}
            onPress={() => {
              console.log({
                examName,
                selectedClass,
                subject,
                duration,
                questions,
              });
            }}
          >
            <Text style={{ color: '#fff', fontWeight: '700' }}>
              💾 Create Exam
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default CreateExam;
