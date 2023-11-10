import React from "react";
import { Input, Box, Text } from "@chakra-ui/react";

function Prime() {
  const [selectedNum, setSelectedNum] = React.useState(100);

  const allPrimes = [];
  for (let counter = 2; counter < selectedNum; counter++) {
    if (isPrime(counter)) {
      allPrimes.push(counter);
    }
  }

  return (
    <Box p={4} textAlign="center">
      <form>
        <label htmlFor="num">Your number:</label>
        <Input
          type="number"
          value={selectedNum}
          onChange={(event) => {
            let num = Math.min(100000, Number(event.target.value));
            setSelectedNum(num);
          }}
        />
      </form>
      <Text mt={4} fontFamily="Arial, sans-serif"> 
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{" "}
        <span className="prime-list">{allPrimes.join(", ")}</span>
      </Text>
    </Box>
  );
}

function isPrime(n) {
  const max = Math.ceil(Math.sqrt(n));

  if (n === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
}

export default Prime;
