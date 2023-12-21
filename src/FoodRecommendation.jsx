import React, { useState } from 'react';
import axios from 'axios';

const FoodRecommendation = () => {
  const [recommendation, setRecommendation] = useState('');

  const getRandomFood = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: '설명없이 랜덤으로 한가지 음식만 추천해서 딱 말해줘' },
          ],
        },
        {
          headers: {
            Authorization: 'Bearer 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',
            'Content-Type': 'application/json',
          },
        }
      );

      const food = response.data.choices[0].message.content;
      setRecommendation(food);
    } catch (error) {
      console.error('ChatGPT와 통신 중 오류 발생:', error);
    }
  };

  return (
    <div>
      <button onClick={getRandomFood}>텍스트를 클릭하면 음식이 나와요</button>
      {recommendation && <p>소개해드릴 음식: {recommendation}</p>}
    </div>
  );
};

export default FoodRecommendation;
