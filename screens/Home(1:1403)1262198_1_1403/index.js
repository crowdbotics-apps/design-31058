import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_1404}>
        <View style={styles.View_1_1405}>
          <Text style={styles.Text_1_1405}>Home</Text>
        </View>
        <View style={styles.View_1_1406}>
          <Text style={styles.Text_1_1406}>Explore dog walkers</Text>
        </View>
      </View>
      <View style={styles.View_1_1407}>
        <View style={styles.View_1_1408}>
          <View style={styles.View_1_1409}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb4c/e7ea/7a5a712e198d4b9c56c4fa8b97cb386d"
              }}
              style={styles.ImageBackground_1_1410}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b34/3711/420fa789b3dce88fdd991ae055b3f81e"
          }}
          style={styles.ImageBackground_1_1411}
        />
        <View style={styles.View_1_1505}>
          <View style={styles.View_1_1506}>
            <Text style={styles.Text_1_1506}>The first walk is free!</Text>
          </View>
          <View style={styles.View_1_1507}>
            <Text style={styles.Text_1_1507}>Surprise For You</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1508}>
        <View style={styles.View_1_1509}>
          <View style={styles.View_1_1510}>
            <Text style={styles.Text_1_1510}>Book a walk</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80c9/c37d/93bb49b35467300514c02ea3374c1dd0"
            }}
            style={styles.ImageBackground_1_1511}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91df/6043/b1b2b4a19a193d34bcfb25879885ca0e"
        }}
        style={styles.ImageBackground_1_1514}
      />
      <View style={styles.View_1_1515}>
        <View style={styles.View_1_1516}>
          <View style={styles.View_1_1517}>
            <Text style={styles.Text_1_1517}>Top walkers</Text>
          </View>
          <View style={styles.View_1_1518}>
            <Text style={styles.Text_1_1518}>View all</Text>
          </View>
        </View>
        <View style={styles.View_1_1519}>
          <View style={styles.View_1_1520}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45c5/d4dd/17108b65afe952db023ac2c8d6d24ef9"
              }}
              style={styles.ImageBackground_1_1521}
            />
            <View style={styles.View_1_1522}>
              <View style={styles.View_1_1523}>
                <Text style={styles.Text_1_1523}>Trina Kain</Text>
              </View>
              <View style={styles.View_1_1524}>
                <View style={styles.View_1_1525}>
                  <Text style={styles.Text_1_1525}>England, London</Text>
                </View>
                <View style={styles.View_1_1526}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6474/ddaa/38d79848a037e25fd62b922dc0dc7c8a"
                    }}
                    style={styles.ImageBackground_1_1527}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_1530}>
            <View style={styles.View_1_1531}>
              <View style={styles.View_1_1532}>
                <Text style={styles.Text_1_1532}>Mark Greene</Text>
              </View>
              <View style={styles.View_1_1533}>
                <View style={styles.View_1_1534} />
                <View style={styles.View_1_1535}>
                  <Text style={styles.Text_1_1535}>$5/hr</Text>
                </View>
              </View>
              <View style={styles.View_1_1536}>
                <View style={styles.View_1_1537}>
                  <Text style={styles.Text_1_1537}>India, Guntur</Text>
                </View>
                <View style={styles.View_1_1538}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6474/ddaa/38d79848a037e25fd62b922dc0dc7c8a"
                    }}
                    style={styles.ImageBackground_1_1539}
                  />
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abeb/4321/7860d72606d345631eccf7c203be0378"
              }}
              style={styles.ImageBackground_1_1542}
            />
            <View style={styles.View_1_1543}>
              <View style={styles.View_1_1544} />
              <View style={styles.View_1_1545}>
                <View style={styles.View_1_1546}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77fc/0e7e/a56ff1fed5419f526be282cb31857f86"
                    }}
                    style={styles.ImageBackground_1_1547}
                  />
                </View>
                <View style={styles.View_1_1549}>
                  <Text style={styles.Text_1_1549}>4.5</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1550}>
        <View style={styles.View_1_1551}>
          <View style={styles.View_1_1552}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9c9/6b17/6e5f1e394e3c709b2bcc6d4816d0a53c"
              }}
              style={styles.ImageBackground_1_1553}
            />
            <View style={styles.View_1_1554}>
              <View style={styles.View_1_1555}>
                <Text style={styles.Text_1_1555}>Trina Kain</Text>
              </View>
              <View style={styles.View_1_1556}>
                <View style={styles.View_1_1557}>
                  <View style={styles.View_1_1558}>
                    <Text style={styles.Text_1_1558}>England, London</Text>
                  </View>
                  <View style={styles.View_1_1559}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90ec/35a2/988ffd7d7701e5d83546d3b1d6601d85"
                      }}
                      style={styles.ImageBackground_1_1560}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_1563}>
            <View style={styles.View_1_1564}>
              <View style={styles.View_1_1565}>
                <Text style={styles.Text_1_1565}>Mark Greene</Text>
              </View>
              <View style={styles.View_1_1566}>
                <View style={styles.View_1_1567}>
                  <View style={styles.View_1_1568} />
                  <View style={styles.View_1_1569}>
                    <Text style={styles.Text_1_1569}>$5/hr</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_1570}>
                <View style={styles.View_1_1571}>
                  <View style={styles.View_1_1572}>
                    <Text style={styles.Text_1_1572}>India, Guntur</Text>
                  </View>
                  <View style={styles.View_1_1573}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90ec/35a2/988ffd7d7701e5d83546d3b1d6601d85"
                      }}
                      style={styles.ImageBackground_1_1574}
                    />
                  </View>
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59a3/bb2d/a9ab3c8699d7fb9e96f6950f71a96781"
              }}
              style={styles.ImageBackground_1_1577}
            />
            <View style={styles.View_1_1578}>
              <View style={styles.View_1_1579} />
              <View style={styles.View_1_1580}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77fc/0e7e/a56ff1fed5419f526be282cb31857f86"
                  }}
                  style={styles.ImageBackground_1_1581}
                />
              </View>
              <View style={styles.View_1_1583}>
                <Text style={styles.Text_1_1583}>4.2</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_1584}>
          <Text style={styles.Text_1_1584}>Suggested</Text>
        </View>
        <View style={styles.View_1_1585}>
          <Text style={styles.Text_1_1585}>View all</Text>
        </View>
      </View>
      <View style={styles.View_1_1586}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bcb/495e/86cb87c1ccab1c68bfec0853f4e04984"
          }}
          style={styles.ImageBackground_1_1587}
        />
        <View style={styles.View_1_1588}>
          <View style={styles.View_1_1589}>
            <View style={styles.View_1_1590}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c1/ed9a/f9cf49e8ace0a3ab0d807ed2b8964951"
                }}
                style={styles.ImageBackground_1_1591}
              />
            </View>
            <View style={styles.View_1_1593}>
              <Text style={styles.Text_1_1593}>Home</Text>
            </View>
          </View>
          <View style={styles.View_1_1594}>
            <View style={styles.View_1_1595}>
              <View style={styles.View_1_1596}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/460d/6459/4859f6aae061ab622740132cd5c4652c"
                  }}
                  style={styles.ImageBackground_1_1597}
                />
              </View>
            </View>
            <View style={styles.View_1_1604}>
              <Text style={styles.Text_1_1604}>Moments</Text>
            </View>
          </View>
          <View style={styles.View_1_1605}>
            <View style={styles.View_1_1606}>
              <View style={styles.View_1_1607}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd68/c1b4/88c803294337fbbbd910b3aa8d80e9bd"
                  }}
                  style={styles.ImageBackground_1_1608}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23da/cb63/d624e4b868a36bbf06a7c5541b4ad966"
                }}
                style={styles.ImageBackground_1_1610}
              />
            </View>
            <View style={styles.View_1_1611}>
              <Text style={styles.Text_1_1611}>Chat</Text>
            </View>
          </View>
          <View style={styles.View_1_1612}>
            <View style={styles.View_1_1613}>
              <View style={styles.View_1_1614}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e36f/787a/9eb792f3c3ea6f38aa45acc68ef51e8e"
                  }}
                  style={styles.ImageBackground_1_1615}
                />
              </View>
            </View>
            <View style={styles.View_1_1618}>
              <Text style={styles.Text_1_1618}>Profile</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1619}>
        <View style={styles.View_1_1620} />
        <View style={styles.View_1_1621}>
          <View style={styles.View_1_1622}>
            <View style={styles.View_1_1623}>
              <View style={styles.View_1_1624}>
                <Text style={styles.Text_1_1624}>Your location...</Text>
              </View>
              <View style={styles.View_1_1625}>
                <View style={styles.View_1_1626}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70df/4ca5/3812b004933341b89bd16a621c484879"
                    }}
                    style={styles.ImageBackground_1_1627}
                  />
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8e0/de77/170e156089d8db1c5742bd5f348362ea"
              }}
              style={styles.ImageBackground_1_1630}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(22, 22, 22, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1_1404: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.147540983606557%")
  },
  View_1_1405: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1405: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.13939999878406525,
    textTransform: "none"
  },
  View_1_1406: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.28415300546448%"),
    justifyContent: "flex-start"
  },
  Text_1_1406: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1407: {
    width: wp("94.66666666666667%"),
    minWidth: wp("94.66666666666667%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666667%"),
    top: hp("27.732240437158467%")
  },
  View_1_1408: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("0%")
  },
  View_1_1409: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1410: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1411: {
    width: wp("36.038151041666666%"),
    height: hp("14.511541981514686%"),
    top: hp("1.8358741301656423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1505: {
    width: wp("47.733333333333334%"),
    minWidth: wp("47.733333333333334%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.1572265625%"),
    top: hp("5.874316939890711%")
  },
  View_1_1506: {
    width: wp("47.733333333333334%"),
    minWidth: wp("47.733333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.732240437158474%"),
    justifyContent: "flex-start"
  },
  Text_1_1506: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1507: {
    width: wp("36.266666666666666%"),
    minWidth: wp("36.266666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1507: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_1508: {
    width: wp("29.150618489583337%"),
    minWidth: wp("29.150618489583337%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.42389322916667%"),
    top: hp("8.273415487320698%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1509: {
    width: wp("21.150618489583334%"),
    minWidth: wp("21.150618489583334%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.775956284153004%")
  },
  View_1_1510: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.883951822916671%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1510: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  ImageBackground_1_1511: {
    width: wp("3.01728515625%"),
    height: hp("1.5457403464395492%"),
    top: hp("0.2302159377134565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1514: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("84.8360655737705%")
  },
  View_1_1515: {
    width: wp("97.6%"),
    minWidth: wp("97.6%"),
    height: hp("32.436967026340504%"),
    minHeight: hp("32.436967026340504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("48.71057395726605%")
  },
  View_1_1516: {
    width: wp("88.8%"),
    minWidth: wp("88.8%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("0%")
  },
  View_1_1517: {
    width: wp("55.733333333333334%"),
    minWidth: wp("55.733333333333334%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1517: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.13939999878406525,
    textTransform: "none"
  },
  View_1_1518: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_1_1518: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061499999463558205,
    textTransform: "none"
  },
  View_1_1519: {
    width: wp("97.6%"),
    minWidth: wp("97.6%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.393251179345967%")
  },
  View_1_1520: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666667%"),
    top: hp("0%")
  },
  ImageBackground_1_1521: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    height: hp("17.076502732240435%"),
    minHeight: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1522: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.442622950819683%")
  },
  View_1_1523: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1523: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1524: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%")
  },
  View_1_1525: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1525: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1526: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.4781420765027349%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1527: {
    width: wp("1.6666666666666667%"),
    height: hp("1.0245901639344261%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5%")
  },
  View_1_1530: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1531: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.442622950819683%")
  },
  View_1_1532: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1532: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1533: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("4.143897301512338%"),
    minHeight: hp("4.143897301512338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%"),
    top: hp("0.5464480874316848%")
  },
  View_1_1534: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("4.143897301512338%"),
    minHeight: hp("4.143897301512338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(32, 32, 32, 1)"
  },
  View_1_1535: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000004%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_1_1535: {
    color: "rgba(247, 247, 248, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1536: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%")
  },
  View_1_1537: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1537: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1538: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.4781420765027349%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1539: {
    width: wp("1.6666666666666667%"),
    height: hp("1.0245901639344261%"),
    top: hp("0.05254276463242036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5%")
  },
  ImageBackground_1_1542: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    height: hp("17.076502732240435%"),
    minHeight: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_1543: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("3.187615233040898%"),
    minHeight: hp("3.187615233040898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    top: hp("1.2295081967213193%")
  },
  View_1_1544: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("3.187615233040898%"),
    minHeight: hp("3.187615233040898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 229, 234, 1)",
    opacity: 0.20000000298023224
  },
  View_1_1545: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%"),
    top: hp("0.6830601092896131%")
  },
  View_1_1546: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1547: {
    width: wp("2.222526041666667%"),
    height: hp("1.0815854932441087%"),
    top: hp("0.14231530695013817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22220052083333286%")
  },
  View_1_1549: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999957%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1549: {
    color: "rgba(255, 203, 85, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1550: {
    width: wp("116.26666666666668%"),
    minWidth: wp("116.26666666666668%"),
    height: hp("32.436967026340504%"),
    minHeight: hp("32.436967026340504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("87.09855209934256%")
  },
  View_1_1551: {
    width: wp("116.26666666666668%"),
    minWidth: wp("116.26666666666668%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.393251179345967%")
  },
  View_1_1552: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666667%"),
    top: hp("0%")
  },
  ImageBackground_1_1553: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    height: hp("17.076502732240435%"),
    minHeight: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_1554: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.442622950819683%")
  },
  View_1_1555: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1555: {
    color: "rgba(32, 32, 32, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1556: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568305994%")
  },
  View_1_1557: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1558: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1558: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1559: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.4781420765027491%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1560: {
    width: wp("1.6666666666666667%"),
    height: hp("1.0245901639344261%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5%")
  },
  View_1_1563: {
    width: wp("53.06666666666666%"),
    minWidth: wp("53.06666666666666%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1564: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.442622950819683%")
  },
  View_1_1565: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1565: {
    color: "rgba(32, 32, 32, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1566: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("4.14389834377935%"),
    minHeight: hp("4.14389834377935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%"),
    top: hp("0.5464480874316848%")
  },
  View_1_1567: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("4.14389834377935%"),
    minHeight: hp("4.14389834377935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1568: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("4.14389834377935%"),
    minHeight: hp("4.14389834377935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1569: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000004%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_1_1569: {
    color: "rgba(247, 247, 248, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1570: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568305994%")
  },
  View_1_1571: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1572: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1572: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1573: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.4781420765027491%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1574: {
    width: wp("1.6666666666666667%"),
    height: hp("1.0245901639344261%"),
    top: hp("0.05254276463242036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5%")
  },
  ImageBackground_1_1577: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    height: hp("17.076502732240435%"),
    minHeight: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_1578: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("3.187614190773886%"),
    minHeight: hp("3.187614190773886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    top: hp("1.2295081967213122%")
  },
  View_1_1579: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("3.187614190773886%"),
    minHeight: hp("3.187614190773886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 229, 234, 1)",
    opacity: 0.20000000298023224
  },
  View_1_1580: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1581: {
    width: wp("2.222526041666667%"),
    height: hp("1.0815839298435899%"),
    top: hp("0.14231530695013817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22220052083333286%")
  },
  View_1_1583: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("0.6830601092896273%"),
    justifyContent: "flex-start"
  },
  Text_1_1583: {
    color: "rgba(255, 203, 85, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1584: {
    width: wp("49.86666666666667%"),
    minWidth: wp("49.86666666666667%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1584: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.13939999878406525,
    textTransform: "none"
  },
  View_1_1585: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.86666666666666%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_1_1585: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061499999463558205,
    textTransform: "none"
  },
  View_1_1586: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.18032786885246%")
  },
  ImageBackground_1_1587: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1588: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("3.2786885245901516%")
  },
  View_1_1589: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1590: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1591: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%")
  },
  View_1_1593: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_1_1593: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1594: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.133333333333333%"),
    top: hp("0%")
  },
  View_1_1595: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1596: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_1_1597: {
    width: wp("5.866666666666666%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1604: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_1_1604: {
    color: "rgba(72, 72, 74, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1605: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666667%"),
    top: hp("0%")
  },
  View_1_1606: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0%")
  },
  View_1_1607: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1608: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  ImageBackground_1_1610: {
    width: wp("1.866666666666667%"),
    minWidth: wp("1.866666666666667%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.1366120218579283%")
  },
  View_1_1611: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_1_1611: {
    color: "rgba(72, 72, 74, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1612: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666667%"),
    top: hp("0%")
  },
  View_1_1613: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1614: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_1_1615: {
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1618: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_1_1618: {
    color: "rgba(72, 72, 74, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1619: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("5.737713256168886%"),
    minHeight: hp("5.737713256168886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("18.989071038251364%")
  },
  View_1_1620: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.000008338136101571081%"),
    backgroundColor: "rgba(235, 235, 245, 1)",
    opacity: 0.20000000298023224
  },
  View_1_1621: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1622: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1623: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    height: hp("3.210382513661202%"),
    minHeight: hp("3.210382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    top: hp("1.2295081967213157%")
  },
  View_1_1624: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999998%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1624: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1_1625: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.47814207650273133%")
  },
  View_1_1626: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1627: {
    width: wp("3.3333333333333335%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.16071757332223413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9999999999999991%")
  },
  ImageBackground_1_1630: {
    width: wp("3.55556640625%"),
    height: hp("1.639344262295082%"),
    top: hp("2.049180327868857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
