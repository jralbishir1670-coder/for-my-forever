export const reasonCategories = [
  'All',
  'Personality',
  'Smile',
  'Kindness',
  'Faith',
  'Dreams',
  'Our Memories',
  'Future',
  'Little Things',
];

export const reasons = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  number: index + 1,
  category: index % 8 === 0
    ? 'Future'
    : index % 7 === 0
      ? 'Faith'
      : index % 6 === 0
        ? 'Dreams'
        : index % 5 === 0
          ? 'Our Memories'
          : index % 4 === 0
            ? 'Little Things'
            : index % 3 === 0
              ? 'Kindness'
              : index % 2 === 0
                ? 'Smile'
                : 'Personality',
  text:
    index + 1 === 1
      ? 'Because your smile brightens even my darkest days.'
      : index + 1 === 2
        ? 'Because your kindness makes the world feel gentler.'
        : index + 1 === 3
          ? 'Because your laugh makes ordinary moments feel magical.'
          : index + 1 === 4
            ? 'Because your heart is one of the warmest places I know.'
            : index + 1 === 5
              ? 'Because your faith inspires me to be a better person.'
              : index + 1 === 6
                ? 'Because you make my hopes feel possible.'
                : index + 1 === 7
                  ? 'Because your presence turns quiet moments into memories.'
                  : index + 1 === 8
                    ? 'Because you see beauty where others only see ordinary.'
                    : index + 1 === 9
                      ? 'Because your love makes life feel softer and more meaningful.'
                      : index + 1 === 10
                        ? 'Because you are proof that love can be both gentle and powerful.'
                        : index + 1 === 11
                          ? 'Because your eyes carry a calm I never want to lose.'
                          : index + 1 === 12
                            ? 'Because you make every future I imagine feel brighter.'
                            : index + 1 === 13
                              ? 'Because your tenderness is a gift I never take for granted.'
                              : index + 1 === 14
                                ? 'Because your patience feels like a refuge.'
                                : index + 1 === 15
                                  ? 'Because your presence steadies my heart.'
                                  : index + 1 === 16
                                    ? 'Because the way you care makes me feel deeply cherished.'
                                    : index + 1 === 17
                                      ? 'Because you make love feel safe, beautiful, and real.'
                                      : index + 1 === 18
                                        ? 'Because your dreams inspire me to dream bigger too.'
                                        : index + 1 === 19
                                          ? 'Because your grace turns even hard days softer.'
                                          : index + 1 === 20
                                            ? 'Because your soul feels like home to me.'
                                            : `Because you continue to make my heart feel full in a thousand little ways.`
}));
