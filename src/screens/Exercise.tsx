import {Center, ScrollView, Text, VStack} from '@gluestack-ui/themed'

export function Exercise() {        
    return (    
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <VStack flex={1} bg="$gray700" alignItems="center" justifyContent="center">
                <Center>    
                    <Text color="$gray100" fontSize="$xl">Exercise</Text>
                </Center>
            </VStack>
        </ScrollView>
    )
}