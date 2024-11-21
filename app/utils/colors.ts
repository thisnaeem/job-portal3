export const getTagColor = (tag: string) => {
  const colors = {
    'Entry Level': { bg: '#F3E8FF', text: '#9333EA' },
    'Full-Time': { bg: '#DCFCE7', text: '#16A34A' },
    'Part-Time': { bg: '#E0F2FE', text: '#0284C7' },
    'Remote': { bg: '#FFE4E6', text: '#E11D48' },
    'Expert': { bg: '#FEF3C7', text: '#D97706' },
    'Intermediate': { bg: '#F3E8FF', text: '#9333EA' }
  };
  
  return colors[tag as keyof typeof colors] || { bg: '#F3F4F6', text: '#4B5563' };
}; 