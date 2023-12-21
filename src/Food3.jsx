import React, { useState } from 'react';
import axios from 'axios';

const Food3 = () => {
  const [userInput, setUserInput] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const getFoodRecommendation = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: `오늘 먹은 음식: ${userInput}` },
          ],
        },
        {
          headers: {
            Authorization: 'Bearer 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',
            'Content-Type': 'application/json',
          },
        }
      );

      const recommendedFood = response.data.choices[0].message.content;
      setRecommendation(recommendedFood);
    } catch (error) {
      console.error('음식 추천을 가져오는 중 오류 발생:', error);
    }
  };

  return (
    <div>
      <label>
        오늘 먹은 음식:
        <input type="text" value={userInput} onChange={handleInputChange} />
      </label>
      <button onClick={getFoodRecommendation}>음식 추천 받기</button>
      {recommendation && <p>추천 음식: {recommendation}</p>}
    </div>
  );
};

export default Food3;
