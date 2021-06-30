/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  PixelRatio,
  Alert,
  TouchableNativeFeedback,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import YouTube from 'react-native-youtube';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idvalue: [{id: 'udKE1ksKWDE'}, {id: 'uZgEMlnwG-Y'}],
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: false,
      isLooping: false,
      duration: 0,
      currentTime: 0,
      fullscreen: false,
      containerMounted: false,
      containerWidth: null,
      playerWidth: Dimensions.get('window').width,
    };
  }

  _youTubeRef = React.createRef();
  componentWillUnmount() {
    this.setState({isMounted: false, isReady: false});
  }
  render() {
    console.log('status', this.state.status);
    return (
      <SafeAreaView style={{backgroundColor: 'red'}}>
        <ScrollView
          // contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <FlatList
            data={this.state.idvalue}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  if (this._youTubeRef.current) {
                    this._youTubeRef.current.playVideoAt(item.id);
                  }
                }}
                style={{padding: 5, margin: 5}}>
                <YouTube
                  ref={this._youTubeRef}
                  apiKey="AIzaSyDWcMY_7gQEtaxsjH95zsIlPsQu8VDamDI"
                  // videoId={item.id}
                  videoIds={[
                    'uMK0prafzw0',
                    'qzYgSecGQww',
                    'XXlZfc1TrD0',
                    'LXb3EKWsInQ',
                  ]}
                  play={this.state.isPlaying}
                  loop={this.state.isLooping}
                  // controls={2}
                  // lightboxMode={false}
                  // autoplay={false}
                  fullscreen={this.state.fullscreen}
                  onError={(e) => this.setState({error: e.error})}
                  onReady={(e) => {
                    this.setState({isReady: false});
                  }}
                  onChangeFullscreen={(e) =>
                    this.setState({fullscreen: e.isFullscreen})
                  }
                  onChangeState={(e) => {
                    this.setState({status: e.state});
                  }}
                  onProgress={(e) =>
                    this.setState({
                      duration: e.duration,
                      currentTime: e.currentTime,
                    })
                  }
                  style={[
                    {
                      height: PixelRatio.roundToNearestPixel(
                        this.state.playerWidth / (16 / 9),
                      ),
                    },
                    styles.player,
                  ]}
                />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
});

export default Home;
