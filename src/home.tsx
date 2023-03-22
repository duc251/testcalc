import React, { useState } from 'react';
import * as react from 'react';
import { colors } from './context/Colors';
import { Image, ImageBackground, Switch, Text, Touchable, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import { Btnsum } from './components/Btn';


export default function App() {
    const [result, setResult] = useState('');



    const calculate = (title) => {
        if (title == 'C') {
            setResult('')
        } else if (title == 'DL') {
            setResult(result.substring(0, result.length - 1));
        } else if (title == '=') {
            const ans = Number(eval(result).toFixed(3)).toString();
            setResult(ans);
        } else {
            setResult(result + title);
        }
    }

    const Btn = ({ title, type }) => (
        <TouchableOpacity
            onPress={() => calculate(title)}
            style={{
                backgroundColor: colors.light,
                height: 100,
                width: 100,
                bottom: 1,
                borderWidth: 0.15,
                borderColor: '#989898'
            }}>
            <Text
                style={{
                    height: 100,
                    width: 100,
                    fontSize: 37,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    color: Color(type),

                }}>
                {title}
            </Text>
        </TouchableOpacity>
    );

    const Color = (type) => {
        if (type == 'top') {
            return '#63CEEB'
        } else if (type == 'right') {
            return '#63CEEB'
        }
        else if (type == 'sum') {

            return '#1BD3E9'
        }
        return;
    }



    return (
        <View
            style={{
                marginTop: 80,
                height: '100%',
                width: '100%',
                backgroundColor: colors.light,
                alignItems: 'center',
            }}>

            <Text
                style={{
                    fontSize: 40,
                    width: '100%',
                    textAlign: 'right',
                    paddingRight: 20,
                    color: colors.dark,
                    marginTop: 145,
                    paddingBottom: 20
                }}>
                {result}
            </Text>
            <View style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: 'wrap',
                justifyContent: 'center',
                backgroundColor: 'white',
            }}>

                <View style={{ flexDirection: "row", }}>
                    <Btn title="C" type="top" />
                    <Btn title="%" type="top" />
                    <TouchableOpacity
                        onPress={() => calculate("DL")}
                        style={{
                            backgroundColor: colors.light,
                            height: 100,
                            width: 100,
                            bottom: 1,
                            borderWidth: 0.15,
                            borderColor: '#989898'
                        }}>
                        <View>
                            <Image source={require('/Volumes/Untitled/folder/Ncal/src/images/delete(1).png')}
                                style={{
                                    width: 40, height: 40, top: 30, left: 30
                                }}
                            >

                            </Image>
                        </View>
                    </TouchableOpacity>
                    <Btn title="+" type="right" />


                </View>
                <View style={{ flexDirection: "row", }}>
                    <Btn title="7" type="number" />
                    <Btn title="8" type="number" />
                    <Btn title="9" type="number" />
                    <Btn title="-" type="right" />

                </View>


                <View style={{ flexDirection: "row", }}>
                    <Btn title="4" type="number" />
                    <Btn title="5" type="number" />
                    <Btn title="6" type="number" />
                    <Btn title="x" type="right" />

                </View>

                <View style={{ flexDirection: "row", }}>
                    <Btn title="1" type="number" />
                    <Btn title="2" type="number" />
                    <Btn title="3" type="number" />
                    <TouchableOpacity
                        onPress={() => calculate("/")}
                        style={{
                            backgroundColor: colors.light,
                            height: 100,
                            width: 100,
                            bottom: 1,
                            borderWidth: 0.15,
                            borderColor: '#989898'
                        }}>
                        <View>
                            <Image source={require('/Volumes/Untitled/folder/Ncal/src/images/divided.png')}
                                style={{
                                    width: 40, height: 40, top: 30, left: 30
                                }}
                            >

                            </Image>
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: "row", }}>
                    <TouchableOpacity
                        onPress={() => calculate("")}
                        style={{
                            backgroundColor: colors.light,
                            height: 100,
                            width: 100,
                            bottom: 1,
                            elevation: 1,
                            borderWidth: 0.15,
                            borderColor: '#989898',
                        }}>
                        <View>
                            <Image source={require('/Volumes/Untitled/folder/Ncal/src/images/replace(1).png')}
                                style={{
                                    width: 40, height: 40, top: 30, left: 30
                                }}
                            >

                            </Image>
                        </View>
                    </TouchableOpacity>
                    <Btn title="0" type="number" />
                    <Btn title="." type="number" />
                    <TouchableOpacity
                        onPress={() => calculate("=")}
                        style={{
                            backgroundColor: colors.light,
                            height: 100,
                            width: 100,
                            bottom: 1,
                            elevation: 1,
                        }}>
                        <Text
                            style={{
                                height: 100,
                                width: 100,
                                fontSize: 37,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                                color: colors.light,
                                backgroundColor: colors.light3,
                            }}>=</Text>
                    </TouchableOpacity>

                </View>


            </View>
        </View>
    );
}