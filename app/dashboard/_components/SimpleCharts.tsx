"use client"
import { BarChart } from "@mui/x-charts/BarChart";
import Stack from '@mui/material/Stack';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';


type DataType = {
    id: number;
    name: string;
    language: string;
    email: string;
    testScore: number;
    createdAt: Date;
}[];



export default function SimpleCharts({ data }: { data: DataType | undefined }) {
    const tests = data?.map((d,i) => (`Test-${i}`)) 
    const scores = data?.map((d) => d.testScore) 
    const sorted = data?.sort((a, b) => b?.createdAt.getTime() - a?.createdAt.getTime())
    console.log(data)
    
    return (
        <> 
            {data?.length != 0 ? (
                 <div className="mt-[10vh] px-5 flex justify-center items-center flex-col">
            <div className="flex flex-row justify-around items-center w-[80%]">
               <h1 className="font-bold text-3xl">RECENT TEST SCORE</h1>
               {sorted && (
                 <Gauge width={200} height={200} value={sorted[0].testScore} valueMin={0} valueMax={5} sx={(theme) => ({
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 40,
      color: "white"
    },
  })}/>
       )}
     </div> 
      <div className="p-[2rem]">
        <h1 className="font-bold text-2xl">OVERALL PERFORMANCE</h1>
           <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data:tests,
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: scores,
          },
        ]}
        width={500}
        height={300}
            />
     </div>


            
         <Stack direction="row" sx={{ width: '100%' }}>
      <Box sx={{ flexGrow: 1 }}>
        {scores && (
            <SparkLineChart data={scores} height={100} />
        ) 
        }
      </Box>
      <Box sx={{ flexGrow: 1 }}>
                    {scores && (
     <SparkLineChart
          plotType="bar"
          data={scores}
          height={100}
        />
        )}
      </Box>
    </Stack>
      
         </div>
            ) : (
                    <div className="flex items-center justify-center mt-[10vh] h-[100vh] px-5">
                         <h1 className="text-5xl">NO SUFFICIENT DATA</h1>
                </div>
            ) 

            }
        
        
        </>

    )
}







