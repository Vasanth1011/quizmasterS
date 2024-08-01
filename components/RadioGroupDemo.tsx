import { Label } from "@/components/ui/label"
import { Question } from "@/types"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupDemo({question}:{question:Question}) {
  return (
    <RadioGroup defaultValue="comfortable" className="border-2 p-4 w-[80%] text-white">
      {
        question.options.map((option) => (
           <div className="flex items-center space-x-2" key={option.id}>
        <RadioGroupItem value={option.text} id={option.id.toString()} className="border-2 border-white text-white" />
            <Label htmlFor={option.id.toString()} >{option.text}</Label>
      </div>
        ))
      }
      {/* <div className="flex items-center space-x-2">;
        <RadioGroupItem value="comfortable" id="r2"  className="border-2 border-white text-white"/>
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" className="border-2 border-white text-white"/>
        <Label htmlFor="r3">Compact</Label>
      </div> */}
    </RadioGroup>
  )
}
