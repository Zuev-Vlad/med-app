import { atom } from 'recoil';


export interface ProductInterface {
    id: string
    name: string
    count: number
    description: string
    expiryDate?: string
}


export const defaultProductState: ProductInterface[] = [
    {
        id: '212',
        name: 'Анальгин',
        count: 10,
        expiryDate: '2022-05-29T10:02:04.589Z',
        description: `Фармакологическое действие: Анальгетик-антипиретик. Является производным пиразолона. Оказывает анальгетическое, жаропонижающее и противовоспалительное действие, механизм которого связан с угнетением синтеза простагландинов.
                      Фармакокинетика
                      После приема внутрь метамизол натрия быстро гидролизуется в желудочном соке с образованием активного метаболита 4-метил-амино-антипирина, который после всасывания метаболизируется в 4-формил-амино-антипирин и другие метаболиты.
                      После в/в введения метамизол натрия быстро становится недоступным для определения.
                      Метаболиты метамизола натрия не связываются с белками плазмы. Наибольшая часть дозы выводится с мочой в форме метаболитов. Метаболиты выделяются с грудным молоком.
                      Показания активных веществ препарата Анальгин
                      Болевой синдром различного генеза (почечная и желчная колика, невралгия, миалгия; при травмах, ожогах, после операций; головная боль, зубная боль, меналгии). Лихорадка при инфекционно-воспалительных заболеваниях.
                      `
    },
    {
        id: '123',
        name: 'Парацетамол',
        count: 10,
        expiryDate: '2022-05-29T10:02:04.589Z',
        description: `Фармакологическое действие: Анальгетик-антипиретик. Обладает жаропонижающим и болеутоляющим действием. Блокирует ЦОГ-1 и ЦОГ-2 преимущественно в ЦНС, воздействуя на центры боли и терморегуляции. В воспаленных тканях клеточные пероксидазы нейтрализуют влияние парацетамола на ЦОГ, что объясняет практически полное отсутствие противовоспалительного эффекта. Поскольку парацетамол обладает чрезвычайно малым влиянием па синтез простагландинов в периферических тканях, он не изменяет водно-электролитный обмен и не вызывает повреждения слизистой оболочки ЖКТ.
                      `
    }
]

export const productsAtom = atom({
    key: 'productAtom',
    default: defaultProductState
})