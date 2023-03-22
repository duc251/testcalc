import * as react from 'react';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native"
import styled from 'styled-components';
import { colors } from "../context/Colors"

export const Btnsum = () => (
        <TouchableOpacity
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
                backgroundColor:colors.light3,
            }}>=</Text>
        </TouchableOpacity>
    );
 
    // const Btndl = () => (
    //     <TouchableOpacity
    //     style={{
    //         backgroundColor: colors.light,
    //         height: 100,
    //         width: 100,
    //         bottom: 1,
    //         elevation: 1,
    //     }}>
    //           <View>
    //             <Image source={require('/Volumes/Untitled/folder/Ncal/src/images/iOSbackspace-light-512.jpg')} 
    //             style={{
    //                 height:50,
    //                 width:50,
    //             }}/>
    //           </View>
                
            
    //     </TouchableOpacity>
    // );

 
 