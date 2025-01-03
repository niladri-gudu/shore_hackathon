import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const TipsGenerator = () => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchResponse = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const genAI = new GoogleGenerativeAI('AIzaSyBXg7yBrsqebnbNgy_NSLYo_Zv0TQOygj8');
      
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const prompt = 'Explain how AI works';
      
      const response = await model.generateContent(prompt);
      console.log(response)
      const generatedText = response.response.candidates[0].content.parts[0].text || 'No content generated'; 
      
      setResult(generatedText);
    } catch (err) {
      console.error('Error fetching AI response:', err);
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Google Generative AI</h1>
      <button onClick={fetchResponse} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Tips'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && <p>{result}</p>}
    </div>
  );
};

export default TipsGenerator;