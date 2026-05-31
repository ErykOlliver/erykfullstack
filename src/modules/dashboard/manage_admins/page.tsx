
import { listAdmins } from '../../admin/services/list-admin'
import { typeAdminProps } from '../../admin/type'

export default async function ManageAdmins() {
    const [admins] = await Promise.all([
        listAdmins()
    ])
    return (
        <div className='w-full h-full flex gap-8 flex-col'>
            <header>
                <h1 className="text-2xl font-bold text-gray-800">Total de Administradores({admins.length})</h1>
            </header>
            <div className='flex flex-col gap-2'>

                {admins.map((a, i) => (
                    <div key={i} className='flex w-full h-fit p-3 justify-between rounded-md border border-zinc-200 bg-white'>
                        <div className='w-fit h-fit flex flex-col gap-0'>
                            <span className='text-md font-medium'>{a.admin}</span>
                            <span className='font-light text-sm'>{a.role}</span>
                        </div>
                        <span className='font-light uppercase text-xs'>{a.id}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
