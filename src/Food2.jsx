import React, { useState } from 'react';
import axios from 'axios';

const Food2 = () => {
  const [recommendation, setRecommendation] = useState('');

  const getRandomFood = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: '너가 아무 음식이나 하나 골라서 레시피와 유명한 레시피 영상 추천해줘' },
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
      <button onClick={getRandomFood}>음식과 레시피를 같이 추천</button>
      {recommendation && <p>추천음식과 레시피: {recommendation}</p>}
    </div>
  );
};

export default Food2;
