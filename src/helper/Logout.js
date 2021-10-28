import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { loggout } from '../redux/actions'

export const onLoggOut = () => {
    const dispatch = useDispatch()

    Alert.alert(
        "Logout",
        "Are You Sure You Want To Logout?",
        [
            {
                text: "No",
                style: "cancel"
            },
            {
                text: "Yes",
                onPress: () => console.log("test"),
            }
        ]
    )
}