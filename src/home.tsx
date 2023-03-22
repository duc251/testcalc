import React, { useState } from 'react';
import { colors } from './context/Colors';
import { Image, ImageBackground, Switch, Text, Touchable, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';


export default function App() {
    const [result, setResult] = useState('');

    const colors = {
        dark: '#22252D',
        dark1: '#292B36',
        dark2: '#272B33',
        light: '#FFF',
        light1: 'rgb(220, 220, 220)',
        light2: '#F7F7F7',
    };

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
                elevation: 1,
            }}>
            <Text
                style={{
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

            return '#63CEEB'
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
                    marginTop: 160,
                    paddingBottom: 20
                }}>
                {result}
            </Text>
            <View style={{
                flex: 3,
                flexDirection: "row",
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
            }}>
                <View style={{ flexDirection: "row", }}>
                    <Btn title="C" type="top" />
                    <Btn title="%" type="top" />
                    <Btn title="DL" type="top" />
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
                    <Btn title="/" type="top" />
                </View>

                <View style={{ flexDirection: "row", }}>
                    <Btn title="X" type="right" />
                    <Btn title="0" type="number" />
                    <Btn title="." type="number" />
                    <Btn title="=" type="sum" />

                </View>


            </View>
        </View>
    );
}