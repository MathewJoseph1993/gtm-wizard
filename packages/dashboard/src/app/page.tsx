'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { TrafficLight } from '@/components/TrafficLight';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function DashboardPage() {
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">GTM Wizard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {user.email}
            </span>
            <Button variant="outline" size="sm" onClick={logout}>
              Sign out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Traffic Light - Hero Element */}
          <div className="md:col-span-2 flex justify-center">
            <TrafficLight
              signal="GRAY"
              message="Connect your Instantly account to see your campaign performance."
              metrics={undefined}
            />
          </div>

          <Separator className="md:col-span-2" />

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Get Started</CardTitle>
              <CardDescription>
                Complete these steps to unlock your GTM insights
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <div>
                  <p className="font-medium">Connect AI Provider</p>
                  <p className="text-sm text-gray-500">Add your OpenAI or Anthropic API key</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <div>
                  <p className="font-medium">Connect Instantly</p>
                  <p className="text-sm text-gray-500">Link your outreach campaign data</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <div>
                  <p className="font-medium">Get Your First Insight</p>
                  <p className="text-sm text-gray-500">See your Traffic Light signal</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Day 21 Teaser */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">The Day 21 Breakthrough</CardTitle>
              <CardDescription>
                Why most founders quit too early
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Research shows 70% of founders quit between days 15-21. But days 22-30 is when
                breakthrough happens.
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Start tracking your daily consistency to unlock the Day 21 Breakthrough module.
              </p>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-500">Your streak</p>
                <p className="text-3xl font-bold">0 days</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
