import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ante per netus penatibus venenatis euismod in iaculis. Suspendisse dictum pharetra dictum urna porta nisi nullam. Convallis nulla velit commodo quis pellentesque sed. Litora penatibus aenean tincidunt nisl quis neque sagittis porta vulputate. Cubilia volutpat dictumst urna nullam nostra. Sociosqu sociosqu nisl enim himenaeos turpis phasellus cras pharetra dolor. Class nullam nibh euismod laoreet integer. Hendrerit dapibus ridiculus pellentesque curae maximus lectus.

Inceptos sed habitant magna eros rhoncus justo penatibus integer. Mollis consectetur massa eleifend cursus aliquet scelerisque faucibus. Dignissim sit id cras dolor pharetra pretium eleifend parturient justo. Conubia ultricies porta sapien lacinia suscipit sapien senectus metus. Venenatis tempor vulputate dis eu bibendum pellentesque vel. Urna purus augue varius nunc ultrices tempor primis. Sagittis aptent ex egestas vehicula eget penatibus! Tristique dignissim molestie blandit suspendisse tincidunt velit a dictum. Eget sem eget augue, metus sagittis auctor?

Tortor risus consequat torquent vehicula habitant vestibulum posuere. Velit dapibus in fermentum ornare; efficitur sollicitudin dapibus. Mus pellentesque eleifend luctus pharetra curabitur justo per. Aptent rhoncus et nam aenean habitant luctus, urna praesent. Sed in ad; platea dapibus erat dictum nisi. Tellus sodales venenatis mus ut at! Suspendisse curae magna non rutrum sapien; sem aliquet.

Augue per scelerisque ligula suspendisse at litora nisl. Quam tristique lectus hac non auctor semper hac nibh. Turpis nascetur venenatis parturient morbi iaculis tortor sagittis. Porta porttitor primis laoreet aenean massa ultricies ipsum. Taciti augue est euismod vitae varius suscipit erat. Scelerisque odio torquent integer per hendrerit ornare laoreet efficitur suspendisse! Quisque varius id congue venenatis varius, magnis hendrerit magnis.

Et fringilla at inceptos congue elementum integer nisl, scelerisque fringilla. Neque sagittis vestibulum molestie mi aliquet sociosqu habitasse ullamcorper magna. Erat lacinia nulla nostra felis ultricies rutrum ante morbi aptent. Venenatis fames himenaeos id; augue arcu erat ornare. Malesuada accumsan maecenas dolor felis facilisi. Enim cras dictum phasellus himenaeos dignissim amet. Per rutrum tristique proin at hendrerit inceptos. Fusce quisque pulvinar tempor morbi scelerisque est blandit.

Parturient himenaeos nullam rhoncus integer magna ridiculus natoque. Adipiscing nunc taciti vel dolor, aenean nunc sit. Ridiculus ac faucibus egestas vitae et felis. Mollis nec metus et nisi ridiculus purus id non. Torquent morbi massa fusce arcu tellus nisi. Tellus placerat leo commodo dictum rhoncus varius inceptos habitant. Adipiscing accumsan felis gravida vel lobortis nulla. Consectetur ipsum praesent posuere fermentum aliquam auctor pretium. Ac gravida nam amet diam porta. Suspendisse odio massa gravida maximus sodales inceptos phasellus euismod.
        </Text>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'red',
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
});

export default App;