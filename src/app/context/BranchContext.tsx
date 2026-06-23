import React, { createContext, useContext, useMemo } from 'react';
import { Branch, BranchType } from '../types/business';
import { basilico } from '../data/basilico-config';

interface BranchContextType {
  activeBranches: Branch[];
  restaurantBranches: Branch[];
  cafeBranches: Branch[];
  getBranchById: (id: string) => Branch | undefined;
  getBranchesByType: (type: BranchType) => Branch[];
  defaultBranch: Branch | undefined;
}

const BranchContext = createContext<BranchContextType | undefined>(undefined);

export function BranchProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo(() => {
    const activeBranches = basilico.branches.filter((b) => b.status === 'active');
    const restaurantBranches = activeBranches.filter((b) => b.type === 'restaurant');
    const cafeBranches = activeBranches.filter((b) => b.type === 'cafe');
    const defaultBranch = basilico.defaultBranchId
      ? basilico.branches.find((b) => b.id === basilico.defaultBranchId)
      : activeBranches[0];

    return {
      activeBranches,
      restaurantBranches,
      cafeBranches,
      getBranchById: (id: string) => basilico.branches.find((b) => b.id === id),
      getBranchesByType: (type: BranchType) => activeBranches.filter((b) => b.type === type),
      defaultBranch,
    };
  }, []);

  return <BranchContext.Provider value={value}>{children}</BranchContext.Provider>;
}

export function useBranches() {
  const context = useContext(BranchContext);
  if (!context) {
    throw new Error('useBranches must be used within a BranchProvider');
  }
  return context;
}
