import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CompetitorForm } from "@/components/competitor/CompetitorForm";
import { useAddCompetitor } from "@/hooks/use-add-competitor";

export const CompetitorDialog = () => {
  const [open, setOpen] = useState(false);
  const { addCompetitor, isLoading } = useAddCompetitor();

  const handleSubmit = async (data: { name: string; youtube_id: string }) => {
    const success = await addCompetitor(data);
    if (success) {
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Adicionar Concorrente</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Concorrente</DialogTitle>
        </DialogHeader>
        <CompetitorForm
          onSubmit={handleSubmit}
          onCancel={() => setOpen(false)}
          isLoading={isLoading}
        />
      </DialogContent>
    </Dialog>
  );
};