import {useState, useEffect} from 'react'
import {Text} from 'react-native'
import { Button, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { useRouter } from 'solito/navigation'
import axios from 'axios'


export function WeatherScreen() {
  const [weather, setWeather] = useState({}) as any
  const router = useRouter()

  const API_KEY = '';
  const CITY = 'Tokyo';
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const requestUrl = `${BASE_URL}?q=${CITY}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    const fetcher = async () => {
      const response = await axios.get(requestUrl)
      // console.log('天気データ:', response.data)
      setWeather(response.data)
    }

    fetcher()
  },[])


  return (
    <YStack
      f={1}
      jc="center"
      ai="center"
      gap="$4"
      bg="$background"
    >
      <Text>{`${weather.name}`}</Text>
      <Text>{weather.weather ? `${weather.weather[0].description}` : ''}</Text>
      <Text>{`${weather.main?.temp}℃`}</Text>
      <Button
        icon={ChevronLeft}
        onPress={() => router.back()}
      >
        Go Home
      </Button>
    </YStack>
  )
}
