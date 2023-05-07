import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const AttendanceChart = () => {
  const absentValue = 50;
  const presentValue = 110;
  const totalAttendance = absentValue + presentValue;

  const pieData = [
    {
      name: 'Absent',
      value: absentValue,
      color: '#F44336',
    },
    {
      name: 'Present',
      value: presentValue,
      color: '#4CAF50',
    },
  ];

  return (
    <View>
      <PieChart
        data={pieData}
        width={300}
        height={200}
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
        center={[10, 0]}
        absolute
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
          <View style={{ backgroundColor: '#F44336', width: 10, height: 10, marginRight: 5 }} />
          <Text>Absent</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ backgroundColor: '#4CAF50', width: 10, height: 10, marginRight: 5 }} />
          <Text>Present</Text>
        </View>
      </View>
      <Text style={{ textAlign: 'center', marginTop: 10 }}>Total Attendance: {totalAttendance}</Text>
    </View>
  );
};

export default AttendanceChart;
