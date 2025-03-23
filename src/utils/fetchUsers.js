export async function fetchUsers() {
  try {
    // проверка спиннера
    await new Promise(resolve => setTimeout(resolve, 1500));


    const response = await fetch('/employees.json')

    if (!response.ok) {
      throw new Error('Users fetch failed')
    }
    return await response.json()
  } catch (e) {
    console.log(e, e.message)
  }
}
