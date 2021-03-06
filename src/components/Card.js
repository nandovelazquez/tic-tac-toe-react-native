import React from 'react';
import { Text, 
    StyleSheet, 
    TouchableOpacity} from 'react-native';
import Colors from '../../res/Colors';


export default class Card extends React.Component {

    onCardPressed = () => {
        if (!this.props.selectable) return;

        this.props.onCardPressed(this.props.index);
    } 
    
    render() {
        return (
            <TouchableOpacity style={CardStyle.card}
                 onPress={this.onCardPressed} >  
                <Text style={this.props.style}> {this.props.textToDisplay} </Text>
            </TouchableOpacity>
        )
    }
    
}

export const CardStyle = StyleSheet.create({
    card: {
        backgroundColor: Colors.cardBackground,
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        // alignContent: 'center',
    },
    textPlayer1: {
        fontSize: 80,
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1,
        color: Colors.cardPlayerOne
    },
    textPlayer2: {
        fontSize: 80,
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1,
        color: Colors.cardPlayerTwo,
    }
});

