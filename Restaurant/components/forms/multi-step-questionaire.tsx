import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import RadioGroup from './../../components/shared/radio-group';
import GhostButton from '../shared/buttons/ghost.button';
import ProgressBar from '../shared/progress-bar';
import {useNavigation, useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../utils/theme';
import VectorIcon from '../shared/vector-icon';

const totalSteps = 4;
const AccessibilityForm: React.FC = () => {
  const {control, handleSubmit, watch} = useForm();
  const [step, setStep] = useState(1);
  const theme = useTheme() as CustomTheme;
  const onSubmit = (data: any) => {
    console.log('Final Data:', data);

    Alert.alert('Selected Options', JSON.stringify(data));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 4,
          marginBottom: 20,
        }}>
        <TouchableOpacity onPress={() => nav.goBack()}>
          <VectorIcon
            library="Ionicons"
            name="arrow-back"
            color="black"
            size={20}
          />
        </TouchableOpacity>
        <ProgressBar
          percentage={(step / totalSteps) * 100}
          barColor={theme.colors.primary}
          backgroundColor={theme.colors.lightGrey + '18'}
          height={8}
          showLabel={false}
          containerStyle={{width: '80%'}}
        />
        <Text style={styles.stepIndicator}>
          {' '}
          {step} / {totalSteps}
        </Text>
      </View>
      {step === 1 && (
        <View>
          <Text style={styles.title}>Accessibility Questionnaire</Text>
          <Text
            style={{color: theme.colors.lightGrey + '90', marginBottom: 16 }}>
            Upload Some Photos Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
          </Text>
          <RadioGroup
            control={control}
            name="adaStandards"
            label="Does your building meet ADA standards?"
            options={[
              {label: 'Yes', value: 'yes'},
              {label: 'No', value: 'no'},
              {label: 'Not Applicable', value: 'na'},
            ]}
          />
        </View>
      )}
      {step === 2 && (
        <View>
          <Text style={styles.title}>Entrance Details</Text>
          <Text style={styles.inputLabel}>
            Does the entrance of your building use stairs, ramp, or is it a flat
            entrance?
          </Text>
          <Controller
            control={control}
            name="entranceDetails"
            render={({field: {onChange, value}}) => (
              <TextInput
                style={styles.textInput}
                placeholder="Type your answer"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <RadioGroup
            control={control}
            name="wheelchairSeating"
            label="Is there wheelchair accessible seating?"
            options={[
              {label: 'Yes', value: 'yes'},
              {label: 'No', value: 'no'},
              {label: 'Not Applicable', value: 'na'},
            ]}
          />
        </View>
      )}
      {step === 3 && (
        <View>
          <Text style={styles.title}>Entrance Details</Text>
          <Text style={styles.inputLabel}>
            Another Sample question for 4th Step
          </Text>
          <Controller
            control={control}
            name="placeName"
            render={({field: {onChange, value}}) => (
              <TextInput
                style={styles.textInput}
                placeholder="Type your answer"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <RadioGroup
            control={control}
            name="park"
            label="Is there park for accessible seating?"
            options={[
              {label: 'Yes', value: 'yes'},
              {label: 'No', value: 'no'},
              {label: 'Not Applicable', value: 'na'},
            ]}
          />
        </View>
      )}

      {step === totalSteps && (
        <View>
          <Text style={styles.title}>Menu Accessibility</Text>
          <RadioGroup
            control={control}
            name="menuBraille"
            label="Does your menu include braille?"
            options={[
              {label: 'Yes', value: 'yes'},
              {label: 'No', value: 'no'},
              {label: 'Not Applicable', value: 'na'},
            ]}
          />
        </View>
      )}
      <View style={styles.buttonContainer}>
        {/* {step > 1 && (
          <TouchableOpacity onPress={prevStep} style={styles.backButton}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        )} */}

        {step < totalSteps ? (
          <GhostButton onPress={nextStep}>Continue</GhostButton>
        ) : (
          <GhostButton onPress={handleSubmit(onSubmit)}>
            Save And Continue
          </GhostButton>
        )}
      </View>
      <TouchableOpacity
        onPress={step < totalSteps ? nextStep : handleSubmit(onSubmit)}>
        <Text style={{textAlign: 'center', marginTop: 10, marginLeft: '-2%'}}>
          skip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  stepIndicator: {
    fontSize: 12,
    color: '#777',
    // textAlign: 'right',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom:5 ,
    color: '#333',
  },
  inputLabel: {
    fontSize: 16,
    marginVertical: 8,
    color: '#555',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    alignSelf: 'flex-end',

    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  backButton: {
    backgroundColor: '#CCC',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    flex: 1,
  },
  submitButton: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    flex: 1,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AccessibilityForm;
