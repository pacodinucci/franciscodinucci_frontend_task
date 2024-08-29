import { useEffect, useState } from "react";
import { ref, onValue, off } from "firebase/database"; // Asegúrate de importar 'off' para desactivar el listener
import { db } from "@/db/firebase";
import { Lead } from "@/lib/types";

const useFirebaseLeads = () => {
  const [firebaseLeads, setFirebaseLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const leadsRef = ref(db, "leads");

    // Listener en tiempo real
    const unsubscribe = onValue(leadsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const leadsArray: Lead[] = Object.entries(data).map(([id, data]) => {
          return {
            id,
            ...(data as Lead), // Asegúrate de que la estructura coincida
          };
        });
        setFirebaseLeads(leadsArray);
      } else {
        console.log("No data from database available.");
        setFirebaseLeads([]); // Limpia los leads si no hay datos
      }
    });

    // Desactivar listener cuando el componente se desmonte
    return () => off(leadsRef, "value", unsubscribe);
  }, []);

  return firebaseLeads;
};

export default useFirebaseLeads;
