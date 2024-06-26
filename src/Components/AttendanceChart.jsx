import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import colors from "../configs/colors"
const AttendanceChart = ({data}) => {
  const absentValue = data?.totalAbsent||0;
  const presentValue = data?.totalPresent||0;
  const totalAttendance = absentValue + presentValue;

  const pieData = [
    {
      name: 'Absent',
      value: absentValue,
      color: colors.red,
    },
    {
      name: 'Present',
      value: presentValue,
      color: colors.green,
    },
  ];

  return (
    <View>
      <PieChart
        data={pieData}
        width={350}
        height={250}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="value"
        backgroundColor="transparent"
        paddingLeft="15"
        center={[60, 5]}
        absolute
        hasLegend={false}
        
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
          <View style={{ backgroundColor: colors.red, width: 10, height: 10, marginRight: 5 }} />
          <Text>{`Absent-${absentValue}`}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ backgroundColor: colors.green, width: 10, height: 10, marginRight: 5 }} />
          <Text>{`Present-${presentValue}`}</Text>
        </View>
      </View>
      <Text style={{ textAlign: 'center', marginTop: 10 }}>Total Attendance: {totalAttendance}</Text>
    </View>
  );
};

export default AttendanceChart;
