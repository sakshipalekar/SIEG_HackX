import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  Img
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Mentors</PricingHeading>
          <PricingContainer>
            

            <PricingCard to="/sign-up">
            <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Raj Naik</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>
                     Graphic Designer
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Qualification: B Design
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Contact</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
            <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Sonia Singh</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>
                     Data Analyst
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Qualification: M.Sc Comp
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Contact</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
            <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Harish Khan</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>
                     Web Developer
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Qualification: B.Tech
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Contact</Button>
              </PricingCardInfo>
            </PricingCard>

            
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
