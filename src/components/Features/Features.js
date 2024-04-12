import React from 'react';
import { Container, Section } from '../../globalStyles';
import {
	FeatureText,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
} from './FeaturesStyles';
import { featuresData } from '../../data/FeaturesData';

const Features = () => {

     // Initial animation values for the feature columns
	const initial = {
		y: 40, // Initial vertical position
		opacity: 0,  // Initial opacity
	};
    // Animation values for the feature columns when they animate in
	const animate = {
		y: 0, // Final vertical position
		opacity: 1, // Full opacity
	};

	return (
		<Section smPadding="50px 10px" position="relative" inverse id="about">
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle>What We Offer</FeatureTitle>
				</FeatureTextWrapper>
                {/* Wrapper for the feature columns */}
				<FeatureWrapper>
                    {/* Map over featuresData to create individual feature columns */}
					{featuresData.map((el, index) => (
						<FeatureColumn
                             // Initial animation values for each feature column
							initial={initial}
                            // Animation values for each feature column when they animate in
							animate={animate}
                            // Transition duration for each feature column
							transition={{ duration: 0.5 + index * 0.1 }}
                            // Unique key for each feature column
							key={index}
						>
							<FeatureImageWrapper className={el.imgClass}>
								{el.icon}
							</FeatureImageWrapper>
							<FeatureName>{el.name}</FeatureName>
							<FeatureText>{el.description}</FeatureText>
						</FeatureColumn>
					))}
				</FeatureWrapper>
			</Container>
		</Section>
	);
};

export default Features;