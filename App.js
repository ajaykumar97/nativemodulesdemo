import React, {useCallback} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  NativeModules,
  Pressable,
} from 'react-native';

const NBridge = NativeModules.NBridge;

const Button = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </Pressable>
  );
};

const App = () => {
  const resolvePromiseWithString = useCallback(async () => {
    try {
      const result = await NBridge.resolvePromiseWithString('John Doe');
      console.log('Resolved Promise result: ', result);
    } catch (error) {
      console.log(error);
      console.log('Failed Promise: ', JSON.stringify(error, null, 2));
    }
  }, []);

  const resolvePromiseWithJson = useCallback(async () => {
    try {
      const result = await NBridge.resolvePromiseWithJson({
        name: 'John Doe',
      });
      console.log('Resolved Promise: ', JSON.stringify(result, null, 2));
    } catch (error) {
      console.log(error);
      console.log('Failed Promise: ', JSON.stringify(error, null, 2));
    }
  }, []);

  const rejectPromise = useCallback(async () => {
    try {
      const result = await NBridge.rejectPromise('John Doe');
      console.log('Resolved Promise: ', JSON.stringify(result, null, 2));
    } catch (error) {
      console.log(error);
      console.log('Failed Promise: ', JSON.stringify(error, null, 2));
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Button
        title={'Resolve With String'}
        onPress={resolvePromiseWithString}
      />
      <Button title={'Resolve With JSON'} onPress={resolvePromiseWithJson} />
      <Button title={'Reject Simple Promise'} onPress={rejectPromise} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 16,
    backgroundColor: '#1B98F5',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});

export default App;
