import React, { useState } from 'react';
import { generateScript } from './api'; // Ensure this path is correct

function App() {
    const [script, setScript] = useState('');

    const handleGenerateScript = async () => {
        try {
            const response = await generateScript({ prompt: "Generate a short story." });
            setScript(response.script); // Set the generated script
        } catch (error) {
            console.error('Error generating script:', error);
        }
    };

    return (
        <div>
            <h1>Content Creator</h1>
            <button onClick={handleGenerateScript}>Generate Script</button>
            {script && (
                <div>
                    <h2>Generated Script:</h2>
                    <p>{script}</p>
                </div>
            )}
        </div>
    );
}

export default App;
