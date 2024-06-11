import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, Box } from "@chakra-ui/react";
import Papa from "papaparse";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Index = () => {
  const [data, setData] = useState([]);
  const [buildingData, setBuildingData] = useState({});
  const [selectedBuilding, setSelectedBuilding] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        const parsedData = results.data;
        setData(parsedData);
        const buildings = parsedData.reduce((acc, row) => {
          if (!acc[row.building_id]) {
            acc[row.building_id] = [];
          }
          acc[row.building_id].push(row);
          return acc;
        }, {});
        setBuildingData(buildings);
      },
    });
  };

  const handleBuildingChange = (event) => {
    setSelectedBuilding(event.target.value);
  };

  const renderChart = (dataKey, color) => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={buildingData[selectedBuilding]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={dataKey} stroke={color} />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Sensor Data Visualization</Text>
        <Input type="file" accept=".csv" onChange={handleFileUpload} />
        {data.length > 0 && (
          <>
            <Text>Select Building:</Text>
            <Input as="select" onChange={handleBuildingChange} value={selectedBuilding}>
              <option value="" disabled>Select a building</option>
              {Object.keys(buildingData).map((building) => (
                <option key={building} value={building}>{building}</option>
              ))}
            </Input>
          </>
        )}
        {selectedBuilding && (
          <>
            <Box width="100%" mt={4}>
              <Text fontSize="xl">Temperature</Text>
              {renderChart("temperature", "#8884d8")}
            </Box>
            <Box width="100%" mt={4}>
              <Text fontSize="xl">Humidity</Text>
              {renderChart("humidity", "#82ca9d")}
            </Box>
            <Box width="100%" mt={4}>
              <Text fontSize="xl">CO2 Levels</Text>
              {renderChart("co2", "#ff7300")}
            </Box>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;