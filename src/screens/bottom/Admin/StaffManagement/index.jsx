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

const StaffManagement = () => {
  const navigation = useNavigation();
  const staffCounts = { total: 45, teachers: 30, others: 15 };

  const classTeachers = [
    { id: '1', className: '1A', teacher: 'Mrs. Sharma' },
    { id: '2', className: '2B', teacher: 'Mr. Singh' },
    { id: '3', className: '3C', teacher: 'Ms. Rao' },
    { id: '4', className: '4A', teacher: 'Mrs. Patel' },
    { id: '5', className: '5B', teacher: 'Mr. Kumar' },
  ];

  const renderTeacher = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 0.5,
        borderColor: '#eee',
      }}
    >
      <Text style={{ ...Fonts.Regular.medium }}>{item.className}</Text>
      <Text style={{ ...Fonts.Regular.medium, color: '#333' }}>
        {item.teacher}
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
        <CustomButton title="+ New Join" style={{ borderRadius: 12 }} onPress={()=>{
          navigation.navigate('AddStaff')
        }} />
      </View>
      {/* Staff counts summary */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 16,
          paddingHorizontal: 16,
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <Text style={[globalStyle.font16ItalicB, { color: '#fff' }]}>
            {staffCounts.total}
          </Text>
          <Text style={[globalStyle.font12, { color: '#fff' }]}>
            Total Staff
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={[globalStyle.font16ItalicB, { color: '#fff' }]}>
            {staffCounts.teachers}
          </Text>
          <Text style={[globalStyle.font12, { color: '#fff' }]}>Teachers</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={[globalStyle.font16ItalicB, { color: '#fff' }]}>
            {staffCounts.others}
          </Text>
          <Text style={[globalStyle.font12, { color: '#fff' }]}>
            Other Staff
          </Text>
        </View>
      </View>

      <View style={[globalStyle.whitecontainer, { height: '75%' }]}>
        <Text style={[globalStyle.font16ItalicB, { marginBottom: 12 }]}>
          Class Teachers
        </Text>
        <FlatList
          data={classTeachers}
          keyExtractor={i => i.id}
          renderItem={renderTeacher}
          ItemSeparatorComponent={() => null}
        />
      </View>
    </LinearGradient>
  );
};

export default StaffManagement;
