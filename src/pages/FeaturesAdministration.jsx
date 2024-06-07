import React, { useState } from 'react';

const FeaturesAdministration = () => {
    const [feature1Enabled, setFeature1Enabled] = useState(false);
    const [feature2Enabled, setFeature2Enabled] = useState(false);
    const [feature3Enabled, setFeature3Enabled] = useState(false);

    const handleFeature1Toggle = () => {
        setFeature1Enabled(!feature1Enabled);
    };

    const handleFeature2Toggle = () => {
        setFeature2Enabled(!feature2Enabled);
    };

    const handleFeature3Toggle = () => {
        setFeature3Enabled(!feature3Enabled);
    };

    return (
        <div>
            <h1>Administration des fonctionnalités</h1>
            <div>
                <label>
                    Feature 1:
                    <input
                        type="checkbox"
                        checked={feature1Enabled}
                        onChange={handleFeature1Toggle}
                    />
                </label>
            </div>
            <div>
                <label>
                    Feature 2:
                    <input
                        type="checkbox"
                        checked={feature2Enabled}
                        onChange={handleFeature2Toggle}
                    />
                </label>
            </div>
            <div>
                <label>
                    Feature 3:
                    <input
                        type="checkbox"
                        checked={feature3Enabled}
                        onChange={handleFeature3Toggle}
                    />
                </label>
            </div>
        </div>
    );
};

export default FeaturesAdministration;