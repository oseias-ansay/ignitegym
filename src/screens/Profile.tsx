import {Center, ScrollView, Text, VStack} from '@gluestack-ui/themed'

export function Profile() {        
    return (    
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <VStack flex={1} bg="$gray700" alignItems="center" justifyContent="center">
                <Center>    
                    <Text color="$gray100" fontSize="$xl">Profile  </Text>
                </Center>
            </VStack>
        </ScrollView>
    )
}