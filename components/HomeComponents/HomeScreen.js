import React, { useState, useEffect } from 'react'
import {
  Linking,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Button,
  Dimensions,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import { SearchBar } from 'react-native-elements'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'

const BrwalhallaImage =
  'https://play-lh.googleusercontent.com/CbjuUftiwUVIabFFXgxXCXhzg9ZFO7rpf8ytSTyTitF6SC2SN-pWXkqAEcxbR9w93Dk'

const MinecraftImage =
  'https://s2.gaming-cdn.com/images/products/442/orig/minecraft-cover.jpg'

const ValorantImage =
  'https://i0.wp.com/funglr.games/wp-content/uploads/2020/05/riot-games-valorant-release-00.jpg'

const LOLImage =
  'https://sites.google.com/site/leagueoflegendsproez/_/rsrc/1467036592862/home/league-of-legends-logo.jpg?height=200&width=400'

const CSGOImage =
  'https://nevasport.ru/wp-content/uploads/2020/05/5c84bef9-e2e7-44ae-8a07-c07be69f85d2.jpg'

const data = [
  {
    title:
      'CS:GO - FaZe Clan vs. OG [Mirage] Map 1 - IEM New York 2020 - Grand Final - EU',
    thumbnail: 'https://pbs.twimg.com/media/EUmJBWDU8AEYUN1.jpg',
    Genres: 'free to play , tactical shooter , First-person shooter',
    gameName: 'CS:GO',
    views: 164069,
    video: 'https://youtu.be/jt318RfYE2k',
  },
  {
    title:
      'EPIC GRAND FINAL ! SENTINELS VS XSET | VCT 3 NA Challengers 1 MAIN EVENT JUL 12 2021',
    thumbnail:
      'https://preview.redd.it/2a08873w55251.png?width=1920&format=png&auto=webp&s=157e48c109df559a8ea187d55a8c0143c14a2b45',
    Genres: 'First-person hero shooter , tactical shooter',
    gameName: 'Valorant',
    views: 168782,
    video: 'https://youtu.be/84RCHF5MZw0',
  },
  {
    title:
      'DWG vs SN - Game 1 | Grand Finals S10 LoL Worlds 2020 PlayOffs | DAMWON Gaming vs Suning G1 full',
    thumbnail:
      'https://www.getoutfox.com/forum/uploads/monthly_2017_08/outfox_lol_tournament_banner_twitter.png.cc33655d39ecce0e46b5df3a5ec60662.png',
    Genres:
      'multiplayer online battle arena , action role-playing game , real-time strategy',
    gameName: 'League Of Legends',
    views: 788791,
    video: 'https://youtu.be/MPlGWKm-jdg',
  },
  {
    title: 'Overwatch League 2021 Season | May Melee Tournament | Finals',
    thumbnail:
      'http://gamesync.us/wp-content/uploads/2017/04/Overwatch_Postcard_Back_wednesdays.jpg',
    Genres: 'first-person shooter , fighting game',
    gameName: 'Overwatch',
    views: 405537,
    video: 'https://youtu.be/jsp1cJAgS3I',
  },
  {
    title:
      'INTENSE Rocket League Tournament With The BEST Player In The WORLD | PROFESSIONAL 3V3 WITH COMMS',
    thumbnail:
      'https://cdn.discordapp.com/attachments/779766323147309118/864846157981548554/Tokyo-2020-x-Street-Fighter-x-Rocket-League.png',
    Genres:
      'Football , Action game , Sports Video Game , Indie game , Sim racing , Vehicle simulation game , Racing , Sports',
    gameName: 'Rocket League',
    views: 951522,
    video: 'https://youtu.be/pkJeDHIttHM',
  },
  {
    title: `PUBG GLOBAL CHAMPIONSHIP WINNER GEN.G - FINAL GAME - Pio, Loki, Esth3r & Taemin`,
    thumbnail:
      'https://cdn.discordapp.com/attachments/779766323147309118/864847388208529428/i-will-design-professional-esports-tournament-banner-flyer-poster-or-any-gaming-event-268826.png',
    Genres: 'battle royale game , action-adventure game',
    gameName: 'PUBG',
    views: 3313949,
    video: 'https://youtu.be/N7DlCZlPpbU',
  },
]

export default function HomeScreen({ navigation }) {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setHeight(Dimensions.get('window').height)
    setWidth(Dimensions.get('window').width)
  }, [])

  const [search, setSearch] = useState('')
  const [filteredDataSource, setFilteredDataSource] = useState(data)
  const [masterDataSource, setMasterDataSource] = useState(data)

  const searchFilterFunction = (text) => {
    if (text) {
      const newData1 = masterDataSource.filter(function (item) {
        const itemData1 = item.Title
          ? item.Title.toUpperCase()
          : ''.toUpperCase()
        const textData1 = text.toUpperCase()
        return itemData1.indexOf(textData1) > -1
      })
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })

      const newData2 = masterDataSource.filter(function (item) {
        const itemData2 = item.Genres
          ? item.Genres.toUpperCase()
          : ''.toUpperCase()
        const textData2 = text.toUpperCase()
        return itemData2.indexOf(textData2) > -1
      })
      const res = newData1.concat(newData)
      const finalres = res.concat(newData2)
      setFilteredDataSource(finalres)
      setSearch(text)
    } else {
      setFilteredDataSource(masterDataSource)
      setSearch(text)
    }
  }

  const [text, changeText] = useState('')

  return (
    <SafeAreaView style={[styles.container, { flex: 1 }]}>
      <View style={{ width: width, flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            marginLeft: 5,
          }}
          onPress={() => navigation.navigate('MenuScreen')}
        >
          <Ionicons name={'reorder-three-outline'} size={45} color={'white'} />
        </TouchableOpacity>
        <Text
          style={[
            styles.title,
            { fontSize: width / 10, marginLeft: 50, marginRight: 30 },
          ]}
        >
          PlayBag
        </Text>
        <TouchableOpacity
          style={{
            marginLeft: width / 30,
            marginTop: 5,
          }}
          onPress={() => navigation.navigate('HostScreen')}
        >
          <Ionicons name={'add-circle-outline'} size={33} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 5,
          }}
        >
          <Ionicons
            name={'notifications-circle-outline'}
            size={33}
            color={'white'}
          />
        </TouchableOpacity>
      </View>
      <SearchBar
        round
        onChangeText={(text) => searchFilterFunction(text)}
        placeholder="Search..."
        value={search}
        style={styles.searchBar}
      />
      <FlatList
        data={filteredDataSource}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Item', item)
                }}
              >
                <Image
                  style={[
                    styles.imagestyle,
                    { width: width - 10, height: height / 3 },
                  ]}
                  source={{ uri: item.thumbnail }}
                />
                <Text
                  style={[
                    styles.Title,
                    {
                      margin: height / 20,
                      marginLeft: 20,
                      fontSize: width / 16,
                    },
                  ]}
                >
                  {item.title}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}
                >
                  <Text
                    style={[
                      styles.views,
                      {
                        marginBottom: height / 20 - 10,
                        marginLeft: width / 14 - 10,
                        fontSize: width / 14 - 10,
                      },
                    ]}
                  >
                    <Ionicons name={'person'} size={15} color={'white'} />{' '}
                    {item.views}
                  </Text>
                  <Text
                    style={[
                      styles.views,
                      {
                        marginBottom: height / 20 - 10,
                        marginLeft: width / 14 - 10,
                        fontSize: width / 14 - 10,
                      },
                    ]}
                  >
                    {item.gameName}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#1FFFC9',
  },
  container: {
    backgroundColor: '#404040',
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  imagestyle: {
    alignSelf: 'center',
    borderColor: '#8c8c8c',
    borderWidth: 0.5,
    borderRadius: 20,
    shadowOpacity: 30,
    shadowColor: 10,
  },
  Title: {
    alignSelf: 'flex-start',
    color: '#8c8c8c',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  views: {
    color: '#8c8c8c',
    fontWeight: 'bold',
  },
  searchBar: {
    padding: 9,
  },
})
