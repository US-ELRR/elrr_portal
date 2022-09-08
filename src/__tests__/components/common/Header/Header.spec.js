import { act, fireEvent, render } from '@testing-library/react'

import Header from '@/components/common/Header'
import singletonRouter from 'next/router'

jest.mock('@/store/store', () =>
  jest.fn(() => ({
    userData: 
    { 
      role:'Career Manager',
      learner:
        {personnel:
          {person:
            { name: 'Test user' } 
          }
        }
    },
    setUserData: jest.fn(),
    removeUserData: jest.fn()
  }))
);

jest.mock('next/dist/client/router', () => require('next-router-mock'))

describe('Header Component', () => {
  it('should render the component', () => {
    const { getByText } = render(<Header />)
    expect(getByText(/Test user/i)).toBeInTheDocument();
    expect(getByText("Career Manager")).toBeInTheDocument();
  })

  it('should render call the route navigation', () => {
    singletonRouter.push('/dashboard')
    const { getByText } = render(<Header />)
    act(() => {
      fireEvent.click(getByText('Logout'))
    })

    expect(singletonRouter).toMatchObject({ asPath: '/' })
  })
})
