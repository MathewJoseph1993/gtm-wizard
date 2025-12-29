'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type SignalType = 'GREEN' | 'YELLOW' | 'RED' | 'GRAY';

interface TrafficLightProps {
  signal: SignalType;
  message: string;
  metrics?: {
    openRate?: number;
    replyRate?: number;
    bounceRate?: number;
  };
}

const signalColors = {
  GREEN: 'bg-green-500',
  YELLOW: 'bg-yellow-500',
  RED: 'bg-red-500',
  GRAY: 'bg-gray-400',
};

const signalBadgeColors = {
  GREEN: 'bg-green-100 text-green-800 border-green-200',
  YELLOW: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  RED: 'bg-red-100 text-red-800 border-red-200',
  GRAY: 'bg-gray-100 text-gray-800 border-gray-200',
};

const signalLabels = {
  GREEN: 'On Track',
  YELLOW: 'Needs Attention',
  RED: 'Critical',
  GRAY: 'No Data',
};

export function TrafficLight({ signal, message, metrics }: TrafficLightProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-3">
          <div
            className={`w-16 h-16 rounded-full ${signalColors[signal]} shadow-lg animate-pulse`}
          />
        </CardTitle>
        <CardDescription className="pt-2">
          <Badge className={signalBadgeColors[signal]} variant="outline">
            {signalLabels[signal]}
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-center text-gray-700">{message}</p>

        {metrics && (
          <div className="grid grid-cols-3 gap-4 pt-4 border-t">
            <div className="text-center">
              <p className="text-2xl font-bold">
                {metrics.openRate !== undefined ? `${(metrics.openRate * 100).toFixed(1)}%` : '-'}
              </p>
              <p className="text-xs text-gray-500">Open Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">
                {metrics.replyRate !== undefined ? `${(metrics.replyRate * 100).toFixed(1)}%` : '-'}
              </p>
              <p className="text-xs text-gray-500">Reply Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">
                {metrics.bounceRate !== undefined ? `${(metrics.bounceRate * 100).toFixed(1)}%` : '-'}
              </p>
              <p className="text-xs text-gray-500">Bounce Rate</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Helper function to calculate signal based on metrics
export function getSignal(
  openRate: number,
  replyRate: number,
  bounceRate: number
): { signal: SignalType; message: string } {
  // RED conditions (critical issues)
  if (openRate < 0.25) {
    return {
      signal: 'RED',
      message: 'Deliverability risk. Stop sending. Check SPF/DKIM.',
    };
  }
  if (bounceRate > 0.08) {
    return {
      signal: 'RED',
      message: 'High bounces. Clean your list before continuing.',
    };
  }

  // YELLOW conditions (needs attention)
  if (openRate > 0.4 && replyRate < 0.02) {
    return {
      signal: 'YELLOW',
      message: 'Good opens, low replies. Your offer needs work.',
    };
  }
  if (replyRate < 0.02) {
    return {
      signal: 'YELLOW',
      message: 'Below benchmark. Review your messaging.',
    };
  }

  // GREEN conditions (on track)
  if (replyRate > 0.06) {
    return {
      signal: 'GREEN',
      message: 'Top 10% performance. You\'re on track. Scale volume.',
    };
  }
  if (replyRate >= 0.02) {
    return {
      signal: 'GREEN',
      message: 'Hitting benchmarks. Keep the momentum.',
    };
  }

  return {
    signal: 'YELLOW',
    message: 'Data insufficient. Keep sending to build sample.',
  };
}
