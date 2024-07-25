export function getUniqueID(): string {
    const now = new Date();
  
    // Obtener fecha en formato DDMMYY
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Enero es 0
    const year = now.getFullYear().toString().slice(-2);
    const datePart = `${day}${year}`;
  
    // Obtener hora en formato HH
    const hours = now.getHours().toString().padStart(2, '0');
  
    // Generar dos números aleatorios entre 10 y 99
    const randomPart = (Math.floor(Math.random() * 90) + 10).toString();
  
    // Concatenar fecha, hora y parte aleatoria para obtener el ID único
    const uniqueID = `${datePart}${randomPart}`;
    return uniqueID;
  }
  
  // Por ejemplo, si se llama a la función a las 12:25 PM, el resultado podría ser "1808234825"
  console.log(getUniqueID());
  