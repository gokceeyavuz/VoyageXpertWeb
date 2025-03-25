import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/Tabs";

export default function App() {
  const [searchType, setSearchType] = useState("otel");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Tabs defaultValue="otel" onValueChange={setSearchType}>
        <TabsList className="flex border-b">
          <TabsTrigger value="otel" className="px-4 py-2">
            Otel Ara
          </TabsTrigger>
          <TabsTrigger value="tur" className="px-4 py-2">
            Tur Ara
          </TabsTrigger>
        </TabsList>

        <TabsContent value="otel">
          <SearchForm type="Otel" />
        </TabsContent>
        <TabsContent value="tur">
          <SearchForm type="Tur" />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function SearchForm({ type }) {
  return (
    <div className="p-4 border rounded-lg mt-4">
      <div className="grid grid-cols-3 gap-4">
        <Input
          placeholder={`${type} Şehir, Bölge veya Tema`}
          className="p-2 border rounded-lg"
        />
        <Input
          type="text"
          placeholder="25-30 Nisan"
          className="p-2 border rounded-lg"
        />
        <Input
          type="text"
          placeholder="Kişi Sayısı: 4"
          className="p-2 border rounded-lg"
        />
      </div>
      <Button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
        ARA
      </Button>
    </div>
  );
}
