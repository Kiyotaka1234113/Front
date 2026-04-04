import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView, Text } from 'react-native';
import { ResponsiveHeader, ResponsiveContainer } from './src/components/ResponsiveHeader';
import { AdaptiveLayout, FeatureCard, StatsRow } from './src/components/AdaptiveLayout';
import { GridLayout, Card } from './src/components/GridLayout';

export default function App() {
  const header = (
    <ResponsiveHeader 
      title="My Responsive App" 
      leftAction={{ icon: '☰', onPress: () => console.log('Menu') }}
    />
  );

  const content = (
    <ScrollView style={{ flex: 1 }}>
      <StatsRow 
        stats={[
          { label: 'Users', value: '10K+' },
          { label: 'Revenue', value: '$5M' },
          { label: 'Uptime', value: '99.9%' }
        ]} 
      />
      
      <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 16 }}>Features</Text>
      
      <GridLayout columns={2}>
        <FeatureCard 
          icon="🚀" 
          title="Fast" 
          description="Optimized performance" 
          variant="primary" 
        />
        <FeatureCard 
          icon="📱" 
          title="Responsive" 
          description="Adapts to any screen" 
          variant="secondary" 
        />
        <FeatureCard 
          icon="🔒" 
          title="Secure" 
          description="Top tier security" 
          variant="accent" 
        />
        <FeatureCard 
          icon="⚙️" 
          title="Customizable" 
          description="Make it your own" 
          variant="primary" 
        />
      </GridLayout>

      <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 16 }}>Recent Activity</Text>
      
      <GridLayout columns={1}>
        <Card title="System Update" subtitle="2 hours ago">
          <Text>The system has been updated to support Flexbox layouts.</Text>
        </Card>
        <Card title="New User Login" subtitle="5 hours ago">
          <Text>User accessed the app from a tablet device.</Text>
        </Card>
      </GridLayout>
    </ScrollView>
  );

  return (
    <SafeAreaProvider>
      <ResponsiveContainer>
        <AdaptiveLayout header={header} content={content} />
      </ResponsiveContainer>
    </SafeAreaProvider>
  );
}