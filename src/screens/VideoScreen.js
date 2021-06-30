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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import YouTube, {YouTubeStandaloneAndroid} from 'react-native-youtube';

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
        <View>
          {/* <YouTube
            ref={this._youTubeRef}
            apiKey="AIzaSyDWcMY_7gQEtaxsjH95zsIlPsQu8VDamDI"
            // videoId={'qzYgSecGQww'}
            // videoIds={[
            //   'uMK0prafzw0',
            //   'qzYgSecGQww',
            //   'XXlZfc1TrD0',
            //   'LXb3EKWsInQ',
            // ]}
            playlistId="PLF797E961509B4EB5"
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
          /> */}
        </View>

        {/* <FlatList
          data={this.state.idvalue}
          renderItem={({item}) => (

          )}
        /> */}

        {/* Fullscreen */}
        {/* {!this.state.fullscreen && (
          <View style={videoStyles.buttonGroup}>
            <Button
              title="Set Fullscreen"
              onPress={() => {
                this.setState({fullscreen: true});
              }}
            />
          </View>
        )} */}

        {/* Playing / Looping */}
        {/* <View style={videoStyles.buttonGroup}>
          <Button
            title={this.state.status == 'playing' ? 'Pause' : 'Play'}
            color={this.state.status == 'playing' ? 'red' : undefined}
            onPress={() => {
              this.setState((state) => ({isPlaying: !state.isPlaying}));
            }}
          />

          <Button
            title={this.state.isLooping ? 'Looping' : 'Not Looping'}
            color={this.state.isLooping ? 'green' : undefined}
            onPress={() => {
              this.setState((state) => ({isLooping: !state.isLooping}));
            }}
          />
        </View> */}

        {/* Get Progress & Duration (Android) */}
        {/* {Platform.OS === 'android' && (
          <View style={videoStyles.buttonGroup}>
            <Button
              title="Get Progress & Duration (Android)"
              onPress={() => {
                if (this._youTubeRef.current) {
                  this._youTubeRef.current
                    .getCurrentTime()
                    .then((currentTime) => {
                      this.setState({currentTime});
                    })
                    .catch((errorMessage) => {
                      this.setState({error: errorMessage});
                    });

                  this._youTubeRef.current
                    .getDuration()
                    .then((duration) => {
                      this.setState({duration});
                    })
                    .catch((errorMessage) => {
                      this.setState({error: errorMessage});
                    });
                }
              }}
            />
          </View>
        )} */}

        <TouchableOpacity
          style={{
            marginTop: 300,
            backgroundColor: 'red',
            borderWidth: 2,
            borderColor: 'red',
            padding: 10,
            height: 40,
          }}
          onPress={() => {
            YouTubeStandaloneAndroid.playVideos({
              apiKey: 'AIzaSyDWcMY_7gQEtaxsjH95zsIlPsQu8VDamDI',
              videoIds: [
                'aXnvdPkswkY',
                '2wC2nPekSnU',
                'SLD9xzJ4oeU',
                'X_Hz2ngbIF0',
              ],
              autoplay: false,
              lightboxMode: true,
              startIndex: 1,
              startTime: 99.5,
              fullscreen: false,
            })
              .then(() => {
                console.log('Android Standalone Player Finished');
              })
              .catch((errorMessage) => {
                this.setState({error: errorMessage});
              });
          }}>
          <Text style={{alignSelf: 'center'}}>Video</Text>
        </TouchableOpacity>

        <Button
          title="Playlist"
          onPress={() => {
            YouTubeStandaloneAndroid.playPlaylist({
              apiKey: 'AIzaSyDWcMY_7gQEtaxsjH95zsIlPsQu8VDamDI',
              playlistId: 'PLF797E961509B4EB5',
              autoplay: false,
              lightboxMode: false,
              startIndex: 2,
              startTime: 100.5,
            })
              .then(() => {
                console.log('Android Standalone Player Finished');
              })
              .catch((errorMessage) => {
                this.setState({error: errorMessage});
              });
          }}
        />

        {/* Play specific video in a videoIds array by index */}
        {this._youTubeRef.current &&
          this._youTubeRef.current.props.videoIds &&
          Array.isArray(this._youTubeRef.current.props.videoIds) && (
            <View style={videoStyles.buttonGroup}>
              {this._youTubeRef.current.props.videoIds.map((videoId, i) => (
                <React.Fragment key={i}>
                  <Button
                    title={`Video ${i}`}
                    onPress={() => {
                      if (this._youTubeRef.current) {
                        this._youTubeRef.current.playVideoAt(i);
                      }
                    }}
                  />
                  <Text></Text>
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
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 5,
    marginTop: '70%',
    width: '60%',
    height: 40,
  },
});
export default Home;
