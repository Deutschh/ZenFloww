"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An area chart with gradient fill"

const chartData = [
  { month: "Janeiro", Realizadas: 186, Esperadas: 80, color: "white"},
  { month: "Fevereiro", Realizadas: 305, Esperadas: 200 },
  { month: "Março", Realizadas: 237, Esperadas: 120 },
  { month: "Abril", Realizadas: 73, Esperadas: 190 },
  { month: "Maio", Realizadas: 209, Esperadas: 130 },
  { month: "Junho", Realizadas: 214, Esperadas: 140 },
]

const chartConfig = {
  desktop: {
    label: "realizadas",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "esperadas",
    color: "var(--chart-2)",
  },
};

export function ChartAreaGradient() {
  return (
    <Card className="bg-zinc-900/25 border-none shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
      <CardHeader>
        <CardTitle className="text-neutral-200">Padaria da Ana</CardTitle>
        <CardDescription className="text-zinc-200/80">
          Vendas esperadas e realizadas nos ultimos 6 meses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              tick={{fill: "#e4e4e7cc"}}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillRealizadas" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="35%"
                  stopColor="#8A2BE2"
                  stopOpacity={1}
                />
                <stop
                  offset="95%"
                  stopColor="#8A2BE2"
                  stopOpacity={0.3}
                />
              </linearGradient>
              <linearGradient id="fillEsperadas" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={1}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.3}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="Esperadas"
              type="natural"
              fill="url(#fillEsperadas)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="Realizadas"
              type="natural"
              fill="url(#fillRealizadas)"
              fillOpacity={0.4}
              stroke="#8A2BE2"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
