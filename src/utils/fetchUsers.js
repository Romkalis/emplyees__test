export async function fetchUsers() {
  try {
    // проверка спиннера
    await new Promise(resolve => setTimeout(resolve, 500));


    const response = await fetch('/employees.json')

    if (!response.ok) {
      throw new Error('Users fetch failed')
    }
    const data = await response.json()

    return data

  } catch (e) {
    console.log(e, e.message)
  }
}
