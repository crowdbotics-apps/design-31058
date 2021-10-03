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
      <View style={styles.View_1_1636}>
        <View style={styles.View_1_1637}>
          <View style={styles.View_1_1638}>
            <Text style={styles.Text_1_1638}>Home</Text>
          </View>
          <View style={styles.View_1_1639}>
            <Text style={styles.Text_1_1639}>Explore dog walkers</Text>
          </View>
        </View>
        <View style={styles.View_1_1640}>
          <View style={styles.View_1_1641}>
            <View style={styles.View_1_1642}>
              <Text style={styles.Text_1_1642}>Book a walk</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80c9/c37d/93bb49b35467300514c02ea3374c1dd0"
              }}
              style={styles.ImageBackground_1_1643}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_1646}>
        <View style={styles.View_1_1647} />
        <View style={styles.View_1_1648}>
          <View style={styles.View_1_1649}>
            <View style={styles.View_1_1650}>
              <View style={styles.View_1_1651}>
                <Text style={styles.Text_1_1651}>Kiyv, Ukraine</Text>
              </View>
              <View style={styles.View_1_1652}>
                <View style={styles.View_1_1653}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70df/4ca5/3812b004933341b89bd16a621c484879"
                    }}
                    style={styles.ImageBackground_1_1654}
                  />
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8e0/de77/170e156089d8db1c5742bd5f348362ea"
              }}
              style={styles.ImageBackground_1_1657}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_1662}>
        <View style={styles.View_1_1663}>
          <View style={styles.View_1_1664}>
            <Text style={styles.Text_1_1664}>Near you</Text>
          </View>
          <View style={styles.View_1_1665}>
            <Text style={styles.Text_1_1665}>View all</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03b3/b850/1a46984ecf3485ecbc52240579e316c4"
          }}
          style={styles.ImageBackground_1_1666}
        />
        <View style={styles.View_1_1667}>
          <View style={styles.View_1_1668}>
            <View style={styles.View_1_1669}>
              <View style={styles.View_1_1670}>
                <Text style={styles.Text_1_1670}>Alex Murray</Text>
              </View>
              <View style={styles.View_1_1671}>
                <View style={styles.View_1_1672}>
                  <Text style={styles.Text_1_1672}>3 km from you</Text>
                </View>
                <View style={styles.View_1_1673}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a7b/1c73/09334a982e6d1cfbc29094f7c1b760ba"
                    }}
                    style={styles.ImageBackground_1_1674}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_1677}>
            <View style={styles.View_1_1678}>
              <View style={styles.View_1_1679}>
                <Text style={styles.Text_1_1679}>Mason York</Text>
              </View>
              <View style={styles.View_1_1680}>
                <View style={styles.View_1_1681} />
                <View style={styles.View_1_1682}>
                  <Text style={styles.Text_1_1682}>$3/h</Text>
                </View>
              </View>
              <View style={styles.View_1_1683}>
                <View style={styles.View_1_1684}>
                  <Text style={styles.Text_1_1684}>7 km from you</Text>
                </View>
                <View style={styles.View_1_1685}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a7b/1c73/09334a982e6d1cfbc29094f7c1b760ba"
                    }}
                    style={styles.ImageBackground_1_1686}
                  />
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33dd/9ffb/9fc97eb59d6cc340fff082b30d2bf2d7"
              }}
              style={styles.ImageBackground_1_1689}
            />
            <View style={styles.View_1_1690}>
              <View style={styles.View_1_1691} />
              <View style={styles.View_1_1692}>
                <View style={styles.View_1_1693}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77fc/0e7e/a56ff1fed5419f526be282cb31857f86"
                    }}
                    style={styles.ImageBackground_1_1694}
                  />
                </View>
                <View style={styles.View_1_1696}>
                  <Text style={styles.Text_1_1696}>4.1</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f64/04b2/c063327642c637bc814074c900435a10"
        }}
        style={styles.ImageBackground_1_1697}
      />
      <View style={styles.View_1_1698}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bcb/495e/86cb87c1ccab1c68bfec0853f4e04984"
          }}
          style={styles.ImageBackground_1_1699}
        />
        <View style={styles.View_1_1700}>
          <View style={styles.View_1_1701}>
            <View style={styles.View_1_1702}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c1/ed9a/f9cf49e8ace0a3ab0d807ed2b8964951"
                }}
                style={styles.ImageBackground_1_1703}
              />
            </View>
            <View style={styles.View_1_1705}>
              <Text style={styles.Text_1_1705}>Home</Text>
            </View>
          </View>
          <View style={styles.View_1_1706}>
            <View style={styles.View_1_1707}>
              <View style={styles.View_1_1708}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/460d/6459/4859f6aae061ab622740132cd5c4652c"
                  }}
                  style={styles.ImageBackground_1_1709}
                />
              </View>
            </View>
            <View style={styles.View_1_1716}>
              <Text style={styles.Text_1_1716}>Moments</Text>
            </View>
          </View>
          <View style={styles.View_1_1717}>
            <View style={styles.View_1_1718}>
              <View style={styles.View_1_1719}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd68/c1b4/88c803294337fbbbd910b3aa8d80e9bd"
                  }}
                  style={styles.ImageBackground_1_1720}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23da/cb63/d624e4b868a36bbf06a7c5541b4ad966"
                }}
                style={styles.ImageBackground_1_1722}
              />
            </View>
            <View style={styles.View_1_1723}>
              <Text style={styles.Text_1_1723}>Chat</Text>
            </View>
          </View>
          <View style={styles.View_1_1724}>
            <View style={styles.View_1_1725}>
              <View style={styles.View_1_1726}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e36f/787a/9eb792f3c3ea6f38aa45acc68ef51e8e"
                  }}
                  style={styles.ImageBackground_1_1727}
                />
              </View>
            </View>
            <View style={styles.View_1_1730}>
              <Text style={styles.Text_1_1730}>Profile</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1731}>
        <View style={styles.View_1_1732}>
          <View style={styles.View_1_1733}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9c9/6b17/6e5f1e394e3c709b2bcc6d4816d0a53c"
              }}
              style={styles.ImageBackground_1_1734}
            />
            <View style={styles.View_1_1735}>
              <View style={styles.View_1_1736}>
                <Text style={styles.Text_1_1736}>Olivia Fisher</Text>
              </View>
              <View style={styles.View_1_1737}>
                <View style={styles.View_1_1738}>
                  <View style={styles.View_1_1739}>
                    <Text style={styles.Text_1_1739}>17 km from you</Text>
                  </View>
                  <View style={styles.View_1_1740}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a7b/1c73/09334a982e6d1cfbc29094f7c1b760ba"
                      }}
                      style={styles.ImageBackground_1_1741}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_1744}>
            <View style={styles.View_1_1745}>
              <View style={styles.View_1_1746}>
                <Text style={styles.Text_1_1746}>Morgan Blair</Text>
              </View>
              <View style={styles.View_1_1747}>
                <View style={styles.View_1_1748}>
                  <View style={styles.View_1_1749} />
                  <View style={styles.View_1_1750}>
                    <Text style={styles.Text_1_1750}>$7/hr</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_1751}>
                <View style={styles.View_1_1752}>
                  <View style={styles.View_1_1753}>
                    <Text style={styles.Text_1_1753}>15 km from you</Text>
                  </View>
                  <View style={styles.View_1_1754}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a7b/1c73/09334a982e6d1cfbc29094f7c1b760ba"
                      }}
                      style={styles.ImageBackground_1_1755}
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
              style={styles.ImageBackground_1_1758}
            />
            <View style={styles.View_1_1759}>
              <View style={styles.View_1_1760} />
              <View style={styles.View_1_1761}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77fc/0e7e/a56ff1fed5419f526be282cb31857f86"
                  }}
                  style={styles.ImageBackground_1_1762}
                />
              </View>
              <View style={styles.View_1_1764}>
                <Text style={styles.Text_1_1764}>4.5</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_1765}>
          <Text style={styles.Text_1_1765}>Suggested</Text>
        </View>
        <View style={styles.View_1_1766}>
          <Text style={styles.Text_1_1766}>View all</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91df/6043/b1b2b4a19a193d34bcfb25879885ca0e"
        }}
        style={styles.ImageBackground_1_1767}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(22, 22, 22, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1_1636: {
    width: wp("91.30784505208334%"),
    minWidth: wp("91.30784505208334%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.147540983606557%")
  },
  View_1_1637: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1638: {
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
  Text_1_1638: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.13939999878406525,
    textTransform: "none"
  },
  View_1_1639: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754099%"),
    justifyContent: "flex-start"
  },
  Text_1_1639: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1640: {
    width: wp("29.150618489583337%"),
    minWidth: wp("29.150618489583337%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.1572265625%"),
    top: hp("2.4590163934426226%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1641: {
    width: wp("21.150618489583334%"),
    minWidth: wp("21.150618489583334%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.7759562841530059%")
  },
  View_1_1642: {
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
  Text_1_1642: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  ImageBackground_1_1643: {
    width: wp("3.01728515625%"),
    height: hp("1.5457403464395492%"),
    top: hp("0.2302159377134565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1646: {
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
  View_1_1647: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.000008338136101571081%"),
    backgroundColor: "rgba(65, 65, 67, 1)"
  },
  View_1_1648: {
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
  View_1_1649: {
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
  View_1_1650: {
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
  View_1_1651: {
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
  Text_1_1651: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1_1652: {
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
  View_1_1653: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1654: {
    width: wp("3.3333333333333335%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.16072174239028314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9999999999999991%")
  },
  ImageBackground_1_1657: {
    width: wp("3.55556640625%"),
    height: hp("1.639348431363132%"),
    top: hp("2.049180327868857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_1_1662: {
    width: wp("98.66666666666667%"),
    minWidth: wp("98.66666666666667%"),
    height: hp("32.436967026340504%"),
    minHeight: hp("32.436967026340504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("27.732240437158467%")
  },
  View_1_1663: {
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
  View_1_1664: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1664: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.13939999878406525,
    textTransform: "none"
  },
  View_1_1665: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_1_1665: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061499999463558205,
    textTransform: "none"
  },
  ImageBackground_1_1666: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    height: hp("17.076502732240435%"),
    minHeight: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666667%"),
    top: hp("8.333333333333336%")
  },
  View_1_1667: {
    width: wp("95.73333333333333%"),
    minWidth: wp("95.73333333333333%"),
    height: hp("24.103633693007172%"),
    minHeight: hp("24.103633693007172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333336%")
  },
  View_1_1668: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666667%"),
    top: hp("18.502540796832307%")
  },
  View_1_1669: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1670: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1670: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1671: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060153%")
  },
  View_1_1672: {
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
  Text_1_1672: {
    color: "rgba(239, 239, 241, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1673: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.4781420765027349%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1674: {
    width: wp("1.6666666666666667%"),
    height: hp("1.0245901639344261%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5%")
  },
  View_1_1677: {
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
  View_1_1678: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    height: hp("5.541175050162226%"),
    minHeight: hp("5.541175050162226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.502540796832307%")
  },
  View_1_1679: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1679: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1680: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("4.143895216978312%"),
    minHeight: hp("4.143895216978312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%"),
    top: hp("0.48653024141906087%")
  },
  View_1_1681: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("4.143895216978312%"),
    minHeight: hp("4.143895216978312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(32, 32, 32, 1)"
  },
  View_1_1682: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333329%"),
    top: hp("1.092896174863391%"),
    justifyContent: "flex-start"
  },
  Text_1_1682: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1683: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.491994722293377%")
  },
  View_1_1684: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1684: {
    color: "rgba(239, 239, 241, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1685: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.538059922515373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1686: {
    width: wp("1.6666666666666667%"),
    height: hp("1.0245901639344261%"),
    top: hp("0.05254693370047647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5%")
  },
  ImageBackground_1_1689: {
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
  View_1_1690: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("3.1876110639728483%"),
    minHeight: hp("3.1876110639728483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    top: hp("1.2894260427339503%")
  },
  View_1_1691: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("3.1876110639728483%"),
    minHeight: hp("3.1876110639728483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 229, 234, 1)",
    opacity: 0.20000000298023224
  },
  View_1_1692: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999957%"),
    top: hp("0.6830601092896202%")
  },
  View_1_1693: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1694: {
    width: wp("2.222526041666667%"),
    height: hp("1.0815813241760588%"),
    top: hp("0.14231530695013817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22220052083333286%")
  },
  View_1_1696: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1696: {
    color: "rgba(255, 203, 85, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  ImageBackground_1_1697: {
    width: wp("1.866666666666667%"),
    minWidth: wp("1.866666666666667%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.4%"),
    top: hp("20.491803278688526%")
  },
  View_1_1698: {
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
  ImageBackground_1_1699: {
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
  View_1_1700: {
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
  View_1_1701: {
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
  View_1_1702: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1703: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%")
  },
  View_1_1705: {
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
  Text_1_1705: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1706: {
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
  View_1_1707: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1708: {
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
  ImageBackground_1_1709: {
    width: wp("5.866666666666666%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1716: {
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
  Text_1_1716: {
    color: "rgba(72, 72, 74, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1717: {
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
  View_1_1718: {
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
  View_1_1719: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1720: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  ImageBackground_1_1722: {
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
  View_1_1723: {
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
  Text_1_1723: {
    color: "rgba(72, 72, 74, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1724: {
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
  View_1_1725: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1726: {
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
  ImageBackground_1_1727: {
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1730: {
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
  Text_1_1730: {
    color: "rgba(72, 72, 74, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1731: {
    width: wp("116.26666666666668%"),
    minWidth: wp("116.26666666666668%"),
    height: hp("32.453743356173156%"),
    minHeight: hp("32.453743356173156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("66.18013642524761%")
  },
  View_1_1732: {
    width: wp("116.26666666666668%"),
    minWidth: wp("116.26666666666668%"),
    height: hp("24.060492176827186%"),
    minHeight: hp("24.060492176827186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.393251179345967%")
  },
  View_1_1733: {
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
  ImageBackground_1_1734: {
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
  View_1_1735: {
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
  View_1_1736: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1736: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1737: {
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
  View_1_1738: {
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
  View_1_1739: {
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
  Text_1_1739: {
    color: "rgba(239, 239, 241, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1740: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.4781420765027491%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1741: {
    width: wp("1.6666666666666667%"),
    height: hp("1.0245901639344261%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5%")
  },
  View_1_1744: {
    width: wp("53.06666666666666%"),
    minWidth: wp("53.06666666666666%"),
    height: hp("24.060492176827186%"),
    minHeight: hp("24.060492176827186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1745: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    height: hp("5.617869226007514%"),
    minHeight: hp("5.617869226007514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.442622950819683%")
  },
  View_1_1746: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1746: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1747: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("4.143895216978312%"),
    minHeight: hp("4.143895216978312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%"),
    top: hp("0.5464480874316848%")
  },
  View_1_1748: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("4.143895216978312%"),
    minHeight: hp("4.143895216978312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1749: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("4.143895216978312%"),
    minHeight: hp("4.143895216978312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(32, 32, 32, 1)"
  },
  View_1_1750: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000004%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_1_1750: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1751: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.56868889813866%")
  },
  View_1_1752: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1753: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1753: {
    color: "rgba(239, 239, 241, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1754: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.4613657466700829%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1755: {
    width: wp("1.6666666666666667%"),
    height: hp("1.0245901639344261%"),
    top: hp("0.05254693370046937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5%")
  },
  ImageBackground_1_1758: {
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
  View_1_1759: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("3.1876110639728483%"),
    minHeight: hp("3.1876110639728483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    top: hp("1.2295081967213122%")
  },
  View_1_1760: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("3.1876110639728483%"),
    minHeight: hp("3.1876110639728483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 229, 234, 1)",
    opacity: 0.20000000298023224
  },
  View_1_1761: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1762: {
    width: wp("2.222526041666667%"),
    height: hp("1.0815813241760588%"),
    top: hp("0.14231530695013817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22220052083333286%")
  },
  View_1_1764: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("0.6830601092896131%"),
    justifyContent: "flex-start"
  },
  Text_1_1764: {
    color: "rgba(255, 203, 85, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1765: {
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
  Text_1_1765: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.13939999878406525,
    textTransform: "none"
  },
  View_1_1766: {
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
  Text_1_1766: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061499999463558205,
    textTransform: "none"
  },
  ImageBackground_1_1767: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("63.85773205366291%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
