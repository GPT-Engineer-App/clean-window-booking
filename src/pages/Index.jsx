import React, { useState } from "react";
import { Container, VStack, Heading, Text, Button, FormControl, FormLabel, Input, Select, Textarea, useToast } from "@chakra-ui/react";
import { FaCalendarCheck } from "react-icons/fa";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    toast({
      title: "Appointment booked.",
      description: "Your window cleaning appointment has been successfully booked.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Clear form fields
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setAddress("");
    setNotes("");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="xl" textAlign="center">
          Book a Window Cleaning Appointment
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Fill out the form below to schedule your window cleaning service.
        </Text>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="date" isRequired>
              <FormLabel>Date</FormLabel>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </FormControl>
            <FormControl id="time" isRequired>
              <FormLabel>Time</FormLabel>
              <Select placeholder="Select time" value={time} onChange={(e) => setTime(e.target.value)}>
                <option value="morning">Morning (8 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                <option value="evening">Evening (4 PM - 8 PM)</option>
              </Select>
            </FormControl>
            <FormControl id="address" isRequired>
              <FormLabel>Address</FormLabel>
              <Textarea value={address} onChange={(e) => setAddress(e.target.value)} />
            </FormControl>
            <FormControl id="notes">
              <FormLabel>Additional Notes</FormLabel>
              <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
            </FormControl>
            <Button leftIcon={<FaCalendarCheck />} colorScheme="teal" type="submit" width="full">
              Book Appointment
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Index;
