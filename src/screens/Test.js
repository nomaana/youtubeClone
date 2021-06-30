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
  Button,
  TouchableOpacity,
  Image,
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
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: true,
      isLooping: true,
      duration: 0,
      currentTime: 0,
      fullscreen: false,
      playerWidth: Dimensions.get('window').width,
      height: 215,
      idvalue: [{id: 'LXb3EKWsInQ'}, {id: 'Kb8CW3axqRE'}],
      idvaluec: ['aXnvdPkswkY', '2wC2nPekSnU', 'SLD9xzJ4oeU', 'X_Hz2ngbIF0'],
    };
  }

  _youTubeRef = React.createRef();
  componentWillUnmount() {
    this.setState({isMounted: false, isReady: false});
  }
  render() {
    // console.log('error', this.state.error);
    console.log('status', this.state.status);
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{margin: 10}}>
          <YouTube
            ref={this._youTubeRef}
            apiKey="AIzaSyDWcMY_7gQEtaxsjH95zsIlPsQu8VDamDI"
            // videoId={'qzYgSecGQww'}
            videoIds={this.state.idvaluec}
            // playlistId="PLF797E961509B4EB5"
            play={this.state.isPlaying}
            loop={this.state.isLooping}
            fullscreen={this.state.fullscreen}
            controls={1}
            style={[
              {
                height: PixelRatio.roundToNearestPixel(
                  this.state.playerWidth / (16 / 9),
                ),
              },
              videoStyles.player,
            ]}
            onError={(e) => {
              this.setState({error: e.error});
            }}
            onReady={(e) => {
              this.setState({isReady: true});
            }}
            onChangeState={(e) => {
              this.setState({status: e.state});
            }}
            onChangeQuality={(e) => {
              this.setState({quality: e.quality});
            }}
            onChangeFullscreen={(e) => {
              this.setState({fullscreen: e.isFullscreen});
            }}
            onProgress={(e) => {
              this.setState({currentTime: e.currentTime});
            }}
          />
        </View>

        {/* Play specific video in a videoIds array by index */}
        {this._youTubeRef.current &&
          this._youTubeRef.current.props.videoIds &&
          Array.isArray(this._youTubeRef.current.props.videoIds) && (
            <View style={videoStyles.buttonGroup}>
              {this._youTubeRef.current.props.videoIds.map((videoId, i) => (
                <React.Fragment key={i}>
                  <ScrollView style={{}}>
                    <TouchableOpacity
                      onPress={() => {
                        if (this._youTubeRef.current) {
                          this._youTubeRef.current.playVideoAt(i);
                        }
                      }}
                      style={{
                        backgroundColor: 'black',
                        marginTop: 10,
                        marginHorizontal: 10,
                      }}>
                      <View style={{alignSelf: 'center'}}>
                        <Image
                          style={{
                            width: 50,
                            height: 50,
                          }}
                          source={require('../asset/play.png')}
                          resizeMode={'cover'}
                        />
                        <Text style={{color: 'white'}}> {`Video ${i}`}</Text>
                      </View>
                    </TouchableOpacity>
                  </ScrollView>
                </React.Fragment>
              ))}
            </View>
          )}
      </SafeAreaView>
    );
  }
}

const videoStyles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
  buttonGroup: {
    // flexDirection: 'row',
    // alignSelf: 'center',
    // paddingBottom: 5,
    // margin: 1,
    marginTop: '70%',
    width: '100%',
    height: 400,
  },
});
export default Home;
