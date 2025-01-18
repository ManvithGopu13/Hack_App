import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Text, TouchableOpacity } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { Svg, Circle, Rect } from 'react-native-svg';

const ChartScreen: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState<string>('line'); // State for chart type
  const [colorScheme, setColorScheme] = useState<string>('#1cc910'); // State for color scheme

  const chartWidth = Dimensions.get('window').width - 32; // Dynamic chart width

  const renderChart = () => {
    switch (selectedChart) {
      case 'line':
        return (
          <LineChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [{ data: [20, 45, 28, 80, 99, 43] }],
            }}
            width={chartWidth}
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            chartConfig={{
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              color: (opacity = 1) => `${colorScheme}`,
              style: { borderRadius: 16 },
            }}
            style={{ marginVertical: 8, borderRadius: 16 }}
          />
        );

      case 'bar':
        return (
          <BarChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [{ data: [20, 45, 28, 80, 99, 43] }],
            }}
            width={chartWidth}
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            chartConfig={{
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              color: (opacity = 1) => `${colorScheme}`,
              style: { borderRadius: 16 },
            }}
            style={{ marginVertical: 8, borderRadius: 16 }}
          />
        );

      case 'scatter':
        return (
          <View style={styles.scatterContainer}>
            <Svg height="220" width={chartWidth}>
              {/* Example Scatter Plot Data */}
              {[{ x: 20, y: 80 }, { x: 50, y: 150 }, { x: 120, y: 100 }].map((point, index) => (
                <Circle
                  key={index}
                  cx={point.x}
                  cy={point.y}
                  r="5"
                  fill={colorScheme}
                />
              ))}
            </Svg>
          </View>
        );

      case 'heatmap':
        return (
          <View style={styles.heatmapContainer}>
            <Svg height="220" width={chartWidth}>
              {/* Example Heatmap Data */}
              {[...Array(5)].map((_, row) =>
                [...Array(5)].map((_, col) => (
                  <Rect
                    key={`${row}-${col}`}
                    x={col * 40}
                    y={row * 40}
                    width="35"
                    height="35"
                    fill={`rgba(0, 0, 255, ${Math.random()})`} // Random opacity for demo
                  />
                ))
              )}
            </Svg>
          </View>
        );

      default:
        return <Text>Please select a chart to display.</Text>;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Select Chart Type</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, selectedChart === 'line' && styles.selectedButton]}
          onPress={() => setSelectedChart('line')}
        >
          <Text style={styles.buttonText}>Line Chart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedChart === 'bar' && styles.selectedButton]}
          onPress={() => setSelectedChart('bar')}
        >
          <Text style={styles.buttonText}>Bar Chart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedChart === 'scatter' && styles.selectedButton]}
          onPress={() => setSelectedChart('scatter')}
        >
          <Text style={styles.buttonText}>Scatter Plot</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedChart === 'heatmap' && styles.selectedButton]}
          onPress={() => setSelectedChart('heatmap')}
        >
          <Text style={styles.buttonText}>Heatmap</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Select Color Scheme</Text>
      <View style={styles.colorContainer}>
        <TouchableOpacity style={[styles.colorBox, { backgroundColor: '#1cc910' }]} onPress={() => setColorScheme('#1cc910')} />
        <TouchableOpacity style={[styles.colorBox, { backgroundColor: '#ff6347' }]} onPress={() => setColorScheme('#ff6347')} />
        <TouchableOpacity style={[styles.colorBox, { backgroundColor: '#4682b4' }]} onPress={() => setColorScheme('#4682b4')} />
        <TouchableOpacity style={[styles.colorBox, { backgroundColor: '#daa520' }]} onPress={() => setColorScheme('#daa520')} />
      </View>

      {renderChart()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  button: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 8,
  },
  selectedButton: {
    backgroundColor: '#1cc910',
  },
  buttonText: {
    fontSize: 14,
    color: '#000',
  },
  scatterContainer: {
    marginVertical: 8,
    backgroundColor: '#eff3ff',
    borderRadius: 16,
  },
  heatmapContainer: {
    marginVertical: 8,
    backgroundColor: '#eff3ff',
    borderRadius: 16,
    alignItems: 'center',
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  colorBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default ChartScreen;
